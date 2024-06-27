import { APP_NAV } from 'common/constants';
import LoginNavigation from 'navigations/loginNavigations';
import HomeNavigation from 'navigations/homeNavigations';

export const appRoutes = [
  {
    name: APP_NAV.LOGIN,
    component: LoginNavigation,
  },
  {
    name: APP_NAV.HOME,
    component: HomeNavigation,
  },
];
