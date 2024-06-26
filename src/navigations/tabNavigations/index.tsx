import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import homeRoutes from 'routes/homeRoutes'; // homeRoutes dosyasının doğru şekilde dışa aktarıldığından emin olun
import { theme } from 'common/theme/theme';
import { View } from 'react-native';

const { colorScheme } = theme.components;
const Tab = createBottomTabNavigator();

const TabNavigations = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        headerTitleAlign: 'center',
        headerTintColor: 'black',
        headerShadowVisible: false,
        headerBackTitleVisible: false,
      })}
    >
      {homeRoutes.map(route => (
        <Tab.Screen
          key={route.name}
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
};
export default TabNavigations;
