import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { loginRoutes } from 'routes/loginRoutes';
const Stack = createNativeStackNavigator();

export default function LoginNavigations() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: 'Back',
      }}
    >
      {loginRoutes.map((item: any, index: any) => {
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
