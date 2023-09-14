import React, {useEffect} from 'react';
import {Button, SafeAreaView, Text, StyleSheet} from 'react-native';
import {createOktaConfig} from './src/helpers/login';

import {
  EventEmitter,
  getAccessToken,
  isAuthenticated,
  signInWithBrowser,
} from '@okta/okta-react-native';

import {colors} from './src/styles/base';

function App() {
  const [authenticated, setAuthenticated] = React.useState(false);
  const [token, setAccessToken] = React.useState('');

  const checkAuthentication = async () => {
    const result = await isAuthenticated();
    if (result.authenticated !== authenticated) {
      await getAccessToken();
      setAuthenticated(result.authenticated);
    }
  };

  const initializeOktaConfig = async () => {
    try {
      await createOktaConfig();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    initializeOktaConfig().then(() => {
      checkAuthentication();
    });

    EventEmitter.addListener('signInSuccess', function (result) {
      if (result.resolve_type !== 'authorized') {
        return;
      }

      setAuthenticated(true);
      setAccessToken(result.access_token);
    });

    EventEmitter.addListener('signOutSuccess', function (error) {
      if (error) {
        return;
      }
    });

    EventEmitter.addListener('onError', function (error) {
      console.warn(error);
    });

    EventEmitter.addListener('onCancelled', function (error) {
      console.warn(error);
    });

    return () => {
      EventEmitter.removeAllListeners('signInSuccess');
      EventEmitter.removeAllListeners('signOutSuccess');
      EventEmitter.removeAllListeners('onError');
      EventEmitter.removeAllListeners('onCancelled');
    };
  }, []);

  const onLoginClick = async () => {
    await signInWithBrowser();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Sign-in" onPress={onLoginClick}>
        Sign-in
      </Button>

      {authenticated ? <Text>Signed-in</Text> : <Text>Not signed-in</Text>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.tertiary,
  },
});

export default App;
