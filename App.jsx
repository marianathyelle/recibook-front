import React from 'react';
import {
  SafeAreaView,
  Text
} from 'react-native';

import OktaConfigProvider from './src/components/okta-provider';

function App() {
  return (
    <OktaConfigProvider>
      <SafeAreaView>
        <Text>hello world</Text>
      </SafeAreaView>
    </OktaConfigProvider>
  );
}

export default App;
