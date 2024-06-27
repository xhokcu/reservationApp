import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { styles } from './styles';

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default LoadingScreen;
