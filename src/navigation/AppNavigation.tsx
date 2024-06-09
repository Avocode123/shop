import React from 'react';
import {NavigationContainer, NavigationProp} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/CustomSplashScreen';
import {AppScreens, NavigationType} from '../typescript/enums/AppScreens';
import {TabBar} from './TabBar';
import {navigationRef} from '../services/NavService';

export type RootStackParamList = {
  [AppScreens.SPLASH_SCREEN]: undefined;
  [NavigationType.TAB]: undefined;
};

export type StackNavigation = NavigationProp<RootStackParamList>;

export const AppNavigation = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={AppScreens.SPLASH_SCREEN}>
        <Stack.Group
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen
            name={AppScreens.SPLASH_SCREEN}
            component={SplashScreen}
          />
          <Stack.Screen name={NavigationType.TAB} component={TabBar} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
