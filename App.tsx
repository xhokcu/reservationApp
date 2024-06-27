import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { Provider, useDispatch } from 'react-redux';
import { useFonts } from 'expo-font';
import { store } from 'store/store';
import { NavigationContainer } from '@react-navigation/native';

import {
  WorkSans_100Thin,
  WorkSans_200ExtraLight,
  WorkSans_300Light,
  WorkSans_400Regular,
  WorkSans_500Medium,
  WorkSans_600SemiBold,
  WorkSans_700Bold,
  WorkSans_800ExtraBold,
  WorkSans_900Black,
  WorkSans_100Thin_Italic,
  WorkSans_200ExtraLight_Italic,
  WorkSans_300Light_Italic,
  WorkSans_400Regular_Italic,
  WorkSans_500Medium_Italic,
  WorkSans_600SemiBold_Italic,
  WorkSans_700Bold_Italic,
  WorkSans_800ExtraBold_Italic,
  WorkSans_900Black_Italic,
} from '@expo-google-fonts/work-sans';
import { AppNavigations } from 'navigations/appNavigations';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { login } from 'store/features/auth/authSlice';
import { setReservations } from 'store/features/reservation/reservationSlice';
import LoadingScreen from 'components/loading';

export default function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const authData = await AsyncStorage.getItem('authData');
        if (authData) {
          const parsedAuthData = JSON.parse(authData);
          store.dispatch(
            login({
              email: parsedAuthData.email,
              userName: parsedAuthData.userName,
            }),
          );
        }

        const reservationData = await AsyncStorage.getItem('reservations');
        if (reservationData) {
          const parsedReservationData = JSON.parse(reservationData);
          store.dispatch(setReservations(parsedReservationData));
        }
      } catch (error) {
        console.error('Error loading data', error);
      }
    };

    fetchData();
  }, []);

  const [fontsLoaded] = useFonts({
    'AvertaStd-Semibold': require('./assets/fonts/AvertaStd-Semibold.otf'),
    'AvertaStd-Regular': require('./assets/fonts/AvertaStd-Regular.otf'),
    'AvertaStd-Bold': require('./assets/fonts/AvertaStd-Bold.otf'),
    'AvertaStd-Light': require('./assets/fonts/AvertaStd-Light.otf'),
    'AvertaStd-ExtraBoldItalic': require('./assets/fonts/AvertaStd-ExtraBoldItalic.otf'),
    WorkSans_100Thin,
    WorkSans_200ExtraLight,
    WorkSans_300Light,
    WorkSans_400Regular,
    WorkSans_500Medium,
    WorkSans_600SemiBold,
    WorkSans_700Bold,
    WorkSans_800ExtraBold,
    WorkSans_900Black,
    WorkSans_100Thin_Italic,
    WorkSans_200ExtraLight_Italic,
    WorkSans_300Light_Italic,
    WorkSans_400Regular_Italic,
    WorkSans_500Medium_Italic,
    WorkSans_600SemiBold_Italic,
    WorkSans_700Bold_Italic,
    WorkSans_800ExtraBold_Italic,
    WorkSans_900Black_Italic,
  });

  if (!fontsLoaded) {
    return <LoadingScreen />;
  }
  return (
    <NavigationContainer>
      <Provider store={store}>
        <AppNavigations />
      </Provider>
    </NavigationContainer>
  );
}
