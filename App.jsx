import React, {useEffect} from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import {createOktaConfig} from './src/helpers/login';

import {
  EventEmitter,
  getAccessToken,
  isAuthenticated,
  signInWithBrowser,
} from '@okta/okta-react-native';

function App() {
  const [authenticated, setauthenticated] = React.useState(false);
  const [token, setAccessToken] = React.useState('');

  const checkauthenticated = async () => {
    const result = await isAuthenticated();
    if (result.authenticated !== authenticated) {
      const newACcessToken = await getAccessToken();
      setauthenticated(result.authenticated);
      console.log(newACcessToken);
    }
  };

  const initializeOktaConfig = async () => {
    try {
      const oktaInitialized = await createOktaConfig();
      console.log(oktaInitialized);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    initializeOktaConfig().then(() => {
      checkauthenticated();
    });

    EventEmitter.addListener('signInSuccess', function (result) {
      if (result.resolve_type !== 'authorized') {
        console.warn(error);
        return;
      }

      setauthenticated(true);
      setAccessToken(result.access_token);
      console.log('LOGGED IN!');
    });

    EventEmitter.addListener('signOutSuccess', function (error) {
      if (error) {
        console.warn(error);
        return;
      }

      console.log('Logged out!');
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
    console.log('onLoginClick');
    await signInWithBrowser();
  };

  return (
    <SafeAreaView>
      <Button title="Sign-in" onPress={onLoginClick}>
        Sign-in
      </Button>

      {authenticated ? <Text>Signed-in</Text> : <Text>Not signed-in</Text>}
    </SafeAreaView>
  );
}

export default App;
