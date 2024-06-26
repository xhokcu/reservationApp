import { appRoutes } from 'routes/appRoutes';

// Stack navigator
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationProp } from '@react-navigation/native';

export type ScreenNames = ['LoginStack', 'HomeStack'];
export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;
const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppNavigations() {
  // buraya eger login olursa home, login degilse login gelecek
  return (
    <Stack.Navigator
      initialRouteName={appRoutes[0]?.name as any}
      screenOptions={{
        headerBackTitle: 'Back',
        headerShown: false,
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: '#9d9d9d' },
        headerBackTitleVisible: false,
      }}
    >
      {appRoutes.map((item, index) => {
        return (
          <Stack.Screen
            key={index}
            name={item?.name as any}
            component={item?.component}
          />
        );
      })}
    </Stack.Navigator>
  );
}
