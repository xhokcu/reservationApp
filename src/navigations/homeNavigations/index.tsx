import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import homeRoutes from 'routes/homeRoutes';
import { theme } from 'common/theme/theme';
import { View } from 'react-native';

const { colorScheme } = theme.components;

export default function HomeNavigations() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator initialRouteName={homeRoutes[0].name}>
      {homeRoutes.map(route => (
        <Tab.Screen
          name={route.name}
          component={route.component}
          options={{
            tabBarActiveTintColor: colorScheme.primary.greenBunny[50],
            tabBarIcon: ({ focused }) => <View>{route.icon({ focused })}</View>,
            headerStyle: {
              backgroundColor: 'white',
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
