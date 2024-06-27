import { StyleSheet } from 'react-native';
import { theme } from 'common/theme/theme';

const {
  borderRadius,
  colorScheme,
  spacing,
  fonts,
  fontSizes,
  alignItems,
  justifyContent,
  flexDirection,
} = theme.components;

export const styles = StyleSheet.create({
  input: {
    height: 48,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});
