import React from 'react';
import {Colors, ScreenNames} from '../../utils';
import Men from '../../modules/homeTopTabScreens/Men';
import Kids from '../../modules/homeTopTabScreens/Kids';
import Women from '../../modules/homeTopTabScreens/Women';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

/**
 * @returns
 */
function TopNavigation() {
  return (
    <Tab.Navigator
      backBehavior="history"
      screenOptions={{
        tabBarIndicatorStyle: {backgroundColor: Colors.black},
        lazy: true,
      }}>
      <Tab.Screen name={ScreenNames.MEN} component={Men} />
      <Tab.Screen name={ScreenNames.WOMEN} component={Women} />
      <Tab.Screen name={ScreenNames.KIDS} component={Kids} />
    </Tab.Navigator>
  );
}

/**
 * @exports
 */
export default TopNavigation;
