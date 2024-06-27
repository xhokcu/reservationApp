import { appRoutes } from 'routes/appRoutes';

// Stack navigator
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationProp } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import LoginNavigations from 'navigations/loginNavigations';
import HomeNavigations from 'navigations/homeNavigations';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

export type ScreenNames = ['LoginStack', 'HomeStack'];
export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;
const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppNavigations() {
  const isAuthenticated = useSelector(
    (state: RootState) => state?.auth?.isAuthenticated,
  );

  if (!isAuthenticated) {
    return <LoginNavigations />;
  }

  return <HomeNavigations />;
}
