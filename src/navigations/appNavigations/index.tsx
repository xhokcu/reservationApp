import { NavigationProp } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import LoginNavigations from 'navigations/loginNavigations';
import HomeNavigations from 'navigations/homeNavigations';

export type ScreenNames = ['LoginStack', 'HomeStack'];
export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;

export function AppNavigations() {
  const isAuthenticated = useSelector(
    (state: RootState) => state?.auth?.isAuthenticated,
  );

  if (!isAuthenticated) {
    return <LoginNavigations />;
  }

  return <HomeNavigations />;
}
