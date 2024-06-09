import React from 'react';
import {NavigationProp} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import {AppScreens} from '../typescript/enums/AppScreens';
import ProductsScreen from '../screens/ProductsScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import {Product} from '../typescript/products';

export type HomeStackParamList = {
  [AppScreens.HOME_SCREEN]: undefined;
  [AppScreens.PRODUCTS_SCREEN]: {
    category: string;
  };
  [AppScreens.PRODUCT_DETAIL_SCREEN]: {
    product: Product;
  };
};

export type StackNavigation = NavigationProp<HomeStackParamList>;

export const HomeStack = () => {
  const Stack = createNativeStackNavigator<HomeStackParamList>();

  return (
    <Stack.Navigator initialRouteName={AppScreens.HOME_SCREEN}>
      <Stack.Group
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={AppScreens.HOME_SCREEN} component={HomeScreen} />
        <Stack.Screen
          name={AppScreens.PRODUCTS_SCREEN}
          component={ProductsScreen}
        />
        <Stack.Screen
          name={AppScreens.PRODUCT_DETAIL_SCREEN}
          component={ProductDetailScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
