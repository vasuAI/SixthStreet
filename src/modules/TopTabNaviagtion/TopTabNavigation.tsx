import React from 'react';
import {Colors, ScreenNames} from '../../utils';
import {Kids, Men, Women} from '../../modules/homeTopTabScreens';
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
        swipeEnabled: false,
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
