import { Platform } from "react-native";
import { createConfig } from '@okta/okta-react-native';
import DeviceInfo from 'react-native-device-info';
import { getOktaConfig } from "./env";

export const createOktaConfig = async () => {
  const oktaConfig = getOktaConfig(); 

  if (Platform.OS === 'android') {
    const isEmulator = await DeviceInfo.isEmulator();

    oktaConfig.requireHardwareBackedKeyStore = !isEmulator;
  }

  console.log(JSON.stringify(oktaConfig))

  return await createConfig(oktaConfig);
}