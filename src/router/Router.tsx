import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';
import React from 'react';

const {Navigator, Screen} = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Screen name="BottomTabs" component={BottomTabs} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Router;
