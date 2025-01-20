import {SafeAreaProvider} from 'react-native-safe-area-context';
import StartOperationProvider from './src/providers/StartOperationProvider';
import Router from './src/router/Router';
import React from 'react';

const App = () => {
  return (
    <SafeAreaProvider>
      <StartOperationProvider>
        <Router />
      </StartOperationProvider>
    </SafeAreaProvider>
  );
};

export default App;
