import { View, Text } from 'react-native';
import CustomButton from 'components/button';
import { styles } from './styles';

const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.heading}>Let's get started!</Text>
      <View style={styles.buttonContainer}>
        <CustomButton
          buttonStyle={styles.filledButton}
          title="Login"
          onPress={() => navigation.navigate('Login')}
        />
        <CustomButton
          buttonStyle={styles.outlinedButton}
          textStyle={styles.buttonText}
          title="Sign up"
          onPress={() => navigation.navigate('Signup')}
        />
      </View>
    </View>
  );
};
export default OnboardingScreen;
