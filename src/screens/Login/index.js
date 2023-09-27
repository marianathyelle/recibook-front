import React from "react";
import {View, Text, Image, Pressable} from 'react-native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {Icon} from '@rneui/themed';

import {ANDROID_CLIENT_ID, IOS_CLIENT_ID} from '@env';

import {styles} from './styles';
import {colors} from '../../styles/base';

export const Login = () => {
  const [authenticated, setAuthenticated] = React.useState(false);
  const [token, setAccessToken] = React.useState('');

  const googleSignin = () => {
    GoogleSignin.configure({
      androidClientId: ANDROID_CLIENT_ID,
      iosClientId: IOS_CLIENT_ID,
    });

    GoogleSignin.hasPlayServices()
      .then(hasPlayService => {
        if (hasPlayService) {
          GoogleSignin.signIn()
            .then(userInfo => {
              console.log(JSON.stringify(userInfo));
            })
            .catch(e => {
              console.log('ERROR IS: ' + JSON.stringify(e));
            });
        }
      })
      .catch(e => {
        console.log('ERROR IS: ' + JSON.stringify(e));
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={{width: 250, height: 250}}
        />
        <Pressable onPress={googleSignin} style={styles.button}>
          <View style={styles.buttonContent}>
            <Icon name="google" type="font-awesome" color={colors.primary} />
            <Text style={styles.buttonText}>Sign in with Google</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};