import { View, Text, TextInput, Alert } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import CustomButton from 'components/button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackNavigationProp } from '@react-navigation/stack';

interface SignupScreenProps {
  navigation: StackNavigationProp<any, any>;
}

const SignupScreen: React.FC<SignupScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (inputText: string) => {
    setEmail(inputText);
  };
  const handleUsernameChange = (inputText: string) => {
    setUsername(inputText);
  };
  const handlePasswordChange = (inputText: string) => {
    setPassword(inputText);
  };

  const resetForm = () => {
    setEmail('');
    setUsername('');
    setPassword('');
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const isButtonDisabled = email === '' || username === '' || password === '';

  const handleSignup = async () => {
    try {
      const newUser = { email, username, password };
      const existingUsers = await AsyncStorage.getItem('users');
      let users = existingUsers ? JSON.parse(existingUsers) : [];

      const userExists = users.some(
        (user: any) => user.email === email || user.username === username,
      );

      if (userExists) {
        Alert.alert('Error', 'User already exists. Please log in.');
        resetForm();
      } else {
        users.push(newUser);
        await AsyncStorage.setItem('users', JSON.stringify(users));
        Alert.alert(
          'Signup successful',
          'You can now log in with your credentials.',
        );
        resetForm();
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to sign up. Please try again.');
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>Let’s get started!</Text>
        <Text style={styles.regularText}>
          Create a new account and start exploring.
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#cccccc"
          onChangeText={handleEmailChange}
          value={email}
          selectionColor="#3498db"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          placeholderTextColor="#cccccc"
          onChangeText={handleUsernameChange}
          value={username}
          selectionColor="#3498db"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#cccccc"
          onChangeText={handlePasswordChange}
          value={password}
          selectionColor="#3498db"
          secureTextEntry
        />
      </View>
      <View style={styles.footerContainer}>
        <CustomButton
          disabled={isButtonDisabled}
          buttonStyle={
            isButtonDisabled ? styles.disabledButton : styles.filledButton
          }
          title="Sign up"
          onPress={handleSignup}
        />
        <CustomButton
          buttonStyle={styles.textButton}
          textStyle={styles.coloredText}
          title="Go Back"
          onPress={handleGoBack}
        />
      </View>
    </View>
  );
};
export default SignupScreen;
