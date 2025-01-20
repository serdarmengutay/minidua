import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';
import React from 'react';
import {DarkTheme, LightTheme} from '../utils/colors';
import HomeStack from './stacks/HomeStack';

const {Navigator, Screen} = createNativeStackNavigator();

const Router = () => {
  const theme = 'dark';
  return (
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : LightTheme}>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {/* <Screen name="BottomTabs" component={BottomTabs} /> */}
        <Screen name="HomeStack" component={HomeStack} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Router;
