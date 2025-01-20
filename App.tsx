import {SafeAreaProvider} from 'react-native-safe-area-context';
import StartOperationProvider from './src/providers/StartOperationProvider';
import Router from './src/router/Router';
import React from 'react';
import {Text, View} from 'react-native';

const App = () => {
  return (
    // <StartOperationProvider>
    <Router />
    // </StartOperationProvider>
    // <View>
    //   <Text>serdar</Text>
    // </View>
  );
};

export default App;
