import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Login} from './src/screens/Login';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Sign-in"
          component={Login}
          options={{title: 'Sign-in'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
