import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { homeRoutes } from 'routes/homeRoutes';
const Stack = createNativeStackNavigator();

export default function HomeNavigations() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: 'Back',
        headerShown: false,
        headerTitleAlign: 'center',
        headerTintColor: 'black',
        headerStyle: { backgroundColor: '#D0261C' },
        headerShadowVisible: false,
        headerBackTitleVisible: false,
      }}
    >
      {homeRoutes.map((item: any, index: any) => {
        return (
          <Stack.Screen
            key={index}
            name={item?.name}
            component={item?.component}
            options={item?.options}
          />
        );
      })}
    </Stack.Navigator>
  );
}
