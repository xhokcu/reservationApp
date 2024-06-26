import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from './styles';
import { useDispatch } from 'react-redux';
import CustomButton from 'components/button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login } from 'store/features/auth/authSlice'; // Doğru path'i kontrol edin

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleEmailChange = (inputText: string) => {
    setEmail(inputText);
  };
  const handlePasswordChange = (inputText: string) => {
    setPassword(inputText);
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleLogin = async () => {
    try {
      const storedUsers = await AsyncStorage.getItem('users');
      if (storedUsers) {
        const users = JSON.parse(storedUsers);
        const user = users.find(
          (user: any) =>
            (user.email === email || user.username === email) &&
            user.password === password,
        );

        if (user) {
          await AsyncStorage.setItem('userToken', 'valid-token');
          dispatch(login({ email: user.email, userName: user.username }));
          Alert.alert('Login successful', 'You have successfully logged in.');
        } else {
          Alert.alert(
            'Invalid credentials',
            'Please check your email/username and password.',
          );
          resetForm();
        }
      } else {
        Alert.alert('No user found', 'Please sign up first.');
        resetForm();
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to log in. Please try again.');
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>Welcome back!</Text>
        <Text style={styles.regularText}>Login to your account.</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your email or username"
          placeholderTextColor="#cccccc"
          onChangeText={handleEmailChange}
          value={email}
          selectionColor="#3498db"
        />
        <TextInput
          style={styles.input}
          textContentType="password"
          placeholder="Enter your password"
          placeholderTextColor="#cccccc"
          onChangeText={handlePasswordChange}
          value={password}
          selectionColor="#3498db"
          secureTextEntry
        />
      </View>
      <CustomButton
        buttonStyle={styles.filledButton}
        title="Login"
        onPress={handleLogin}
      />
    </View>
  );
};
export default LoginScreen;
