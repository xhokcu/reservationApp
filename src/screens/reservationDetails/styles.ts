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
  screen: {
    flex: 1,
    // alignItems: alignItems.center,
    // justifyContent: justifyContent.center,
    gap: spacing[5],
    padding: spacing[5],
  },
  input: {
    height: 48,
    width: '100%',
    borderColor: '#dddddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontSize: 16,
    color: '#333333',
    backgroundColor: 'white',
  },
  buttonContainer: {
    flexDirection: flexDirection.row,
    gap: spacing[2],
  },
  errorButton: {
    backgroundColor: colorScheme.common.Error,
    // width: '100%',
    flex: 1,
  },
  filledButton: {
    flex: 1,
  },
  disabledInput: {
    height: 48,
    width: '100%',
    borderColor: '#dddddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontSize: 16,
    color: '#333333',
    backgroundColor: colorScheme.primary.darkBunny[20],
  },
});
