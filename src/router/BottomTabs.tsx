import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {BottomTabTypes} from '../types/navigationTypes';
import HomeStack from './stacks/HomeStack';

const {Navigator, Screen} = createMaterialTopTabNavigator<BottomTabTypes>();

const BottomTabs = () => {
  return (
    <Navigator
      shouldRasterizeIOS
      tabBarPosition="bottom"
      initialRouteName="HomeStack"
      screenOptions={{
        swipeEnabled: false,
        animationEnabled: true,
        tabBarIndicator: () => null,
      }}>
      <Screen name="HomeStack" component={HomeStack} />
    </Navigator>
  );
};

export default BottomTabs;
