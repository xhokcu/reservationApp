import { HOME_NAV } from 'common/constants';

// Screens
import ReservationsScreen from 'screens/reservations';
import ReservationDetailsScreen from 'screens/reservationDetails';
import CreateReservationScreen from 'screens/createReservation';
import MapScreen from 'screens/map';

export const homeRoutes = [
  {
    name: HOME_NAV.RESERVATIONS,
    component: ReservationsScreen,
    options: {
      headerShown: false,
      headerStyle: { backgroundColor: 'red' },
    },
  },
  {
    name: HOME_NAV.RESERVATIONDETAILS,
    component: ReservationDetailsScreen,
    options: {
      headerShown: false,
      headerStyle: { backgroundColor: 'red' },
    },
  },
  {
    name: HOME_NAV.CREATERESERVATION,
    component: CreateReservationScreen,
    options: {
      headerShown: false,
      headerStyle: { backgroundColor: 'red' },
    },
  },
  {
    name: HOME_NAV.MAP,
    component: MapScreen,
    options: {
      headerShown: false,
      headerStyle: { backgroundColor: 'red' },
    },
  },
];
