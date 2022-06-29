import React from 'react';
import HomeScreen from '../BottomTab/homeTab';
import ScreenNames from '../../utils/ScreenNames';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Colors} from '../../utils';
const Stack = createNativeStackNavigator();

const HomeTab = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: Colors.white},
      }}>
      <Stack.Screen name={ScreenNames.HOME} component={HomeScreen} />
    </Stack.Navigator>
  );
};
export default HomeTab;
