import React from "react";
import {View, Text, useState, Pressable} from 'react-native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import {ANDROID_CLIENT_ID, IOS_CLIENT_ID} from '@env';

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
    <View>
      <Text>Hello!</Text>
      <Pressable onPress={googleSignin}>
        <Text>Sign in with Google</Text>
      </Pressable>
    </View>
  );
};