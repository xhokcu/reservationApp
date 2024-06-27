import { LOGIN_NAV } from 'common/constants';
import OnboardingScreen from 'screens/onboarding';
import LoginScreen from 'screens/login/index';
import SignupScreen from 'screens/signup/index';

export const loginRoutes = [
  {
    name: LOGIN_NAV.ONBOARDING,
    component: OnboardingScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: LOGIN_NAV.LOGIN,
    component: LoginScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: LOGIN_NAV.SIGN_UP,
    component: SignupScreen,
    options: {
      headerShown: false,
    },
  },
];
