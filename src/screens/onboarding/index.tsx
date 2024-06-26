import { View, Text } from 'react-native';
import CustomButton from 'components/button';
import { styles } from './styles';
import { OnboardingImage, ListIcon } from 'assets/svg';
import { StackNavigationProp } from '@react-navigation/stack';

interface OnboardingScreenProps {
  navigation: StackNavigationProp<any, any>;
}

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <OnboardingImage />
      <Text style={styles.heading}>Let's get started!</Text>
      <View style={styles.container}>
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
