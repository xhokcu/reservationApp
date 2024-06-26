import { View, Text } from 'react-native';
import { styles } from './styles';

const LoginScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.heading}>Welcome back!</Text>
      <Text>Login to your account.</Text>
    </View>
  );
};
export default LoginScreen;
