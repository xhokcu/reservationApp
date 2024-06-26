import React from 'react';
import { HOME_NAV } from 'common/constants';

// Screens
import ReservationsScreen from 'screens/reservations';
import ReservationDetailsScreen from 'screens/reservationDetails';
import CreateReservationScreen from 'screens/createReservation';
import MapScreen from 'screens/map';
import ListIcon from 'assets/svg/ListIcon'; // Assuming ListIcon is your SVG component
import { theme } from 'common/theme/theme';

const { colorScheme } = theme.components;

export interface INavigationRoute {
  name: string;
  component: React.FC;
  icon?: any;
}

const activeColor = colorScheme.primary.greenBunny[50];
const inactiveColor = colorScheme.primary.darkBunny[50];

const homeRoutes: INavigationRoute[] = [
  {
    name: HOME_NAV.RESERVATIONS,
    component: ReservationsScreen,
    icon: ({ focused }: { focused: boolean }) => (
      <ListIcon filled={focused ? activeColor : inactiveColor} />
    ),
  },
  {
    name: HOME_NAV.RESERVATIONDETAILS,
    component: ReservationDetailsScreen,
    icon: ({ focused }: { focused: boolean }) => (
      <ListIcon filled={focused ? activeColor : inactiveColor} />
    ),
  },
  {
    name: HOME_NAV.CREATERESERVATION,
    component: CreateReservationScreen,
    icon: ({ focused }: { focused: boolean }) => (
      <ListIcon filled={focused ? activeColor : inactiveColor} />
    ),
  },
  {
    name: HOME_NAV.MAP,
    component: MapScreen,
    icon: ({ focused }: { focused: boolean }) => (
      <ListIcon filled={focused ? activeColor : inactiveColor} />
    ),
  },
];

export default homeRoutes;
