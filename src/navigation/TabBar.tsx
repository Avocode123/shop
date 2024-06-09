import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AppTabs} from '../typescript/enums/AppScreens';
import CustomTabBar from '../components/CustomTabBar';
import CartScreen from '../screens/CartScreen';
import {HomeStack} from './HomeStack';

const Tab = createBottomTabNavigator();

export const TabBar = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Group screenOptions={{headerShown: false}}>
        <Tab.Screen name={AppTabs.HOME} component={HomeStack} />
        <Tab.Screen name={AppTabs.CART} component={CartScreen} />
      </Tab.Group>
    </Tab.Navigator>
  );
};
