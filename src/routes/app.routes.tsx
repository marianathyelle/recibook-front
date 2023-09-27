import React, { useEffect } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from "../screens/Login";

const { Navigator, Screen } = createNativeStackNavigator();

const AppRoutes = () => {
  return (
    <Navigator initialRouteName="Launch" screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={Login} />
    </Navigator>
  )
}

export default AppRoutes
