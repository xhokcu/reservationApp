import { theme } from 'common/theme/theme';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigations from 'navigations/tabNavigations';
import ReservationDetailsScreen from 'screens/reservationDetails';

const { colorScheme } = theme.components;

export default function HomeNavigations() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={TabNavigations}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ReservationDetails"
        component={ReservationDetailsScreen}
        options={{
          headerShown: true,
          headerBackTitle: 'Back',
          headerTitle: 'Reservation Details',
        }}
      />
    </Stack.Navigator>
  );
}
