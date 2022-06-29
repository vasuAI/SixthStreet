import HomeTab from '.';
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import CategoryTab from '../BottomTab/categoryTab';
import LocalImages from '../../utils/LocalImages';
import SuperStarTab from '../BottomTab/superStarTab/superStarTab';
import ProfileTab from '../BottomTab/profileTab/profileTab';
import MyWishListTab from '../BottomTab/myWishListTab/myWishListTab';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeTab}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Image
                source={LocalImages.homeActiveIcon}
                style={styles.iconStyle}
              />
            ) : (
              <Image source={LocalImages.homeIcon} style={styles.iconStyle} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Category"
        component={CategoryTab}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Image
                source={LocalImages.categoriesActiveIcon}
                style={styles.iconStyle}
              />
            ) : (
              <Image
                source={LocalImages.categoriesIcon}
                style={styles.iconStyle}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="myWishList"
        component={MyWishListTab}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Image
                source={LocalImages.wishListActiveIcon}
                style={styles.iconStyle}
              />
            ) : (
              <Image
                source={LocalImages.wishListIcon}
                style={styles.iconStyle}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="superStar"
        component={SuperStarTab}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Image
                source={LocalImages.starActiveIcon}
                style={styles.iconStyle}
              />
            ) : (
              <Image source={LocalImages.starIcon} style={styles.iconStyle} />
            );
          },
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileTab}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Image
                source={LocalImages.profileActiveIcon}
                style={styles.iconStyle}
              />
            ) : (
              <Image
                source={LocalImages.profileIcon}
                style={styles.iconStyle}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  iconStyle: {
    width: 30,
    height: 30,
  },
});
