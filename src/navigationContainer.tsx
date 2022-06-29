import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './modules/routers/BottomTabNavigator';

export default function navigationContainer() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
