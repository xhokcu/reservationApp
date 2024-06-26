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
} = theme.components;

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: alignItems.center,
    justifyContent: justifyContent.center,
    gap: spacing[10],
  },
  heading: {
    fontFamily: fonts.medium,
    fontSize: fontSizes.heading.h3,
  },
  buttonContainer: {
    gap: spacing[4],
    alignItems: alignItems.center,
    justifyContent: justifyContent.center,
  },
  filledButton: {
    backgroundColor: colorScheme.primary.greenBunny[50],
  },
  outlinedButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colorScheme.primary.greenBunny[50],
  },
  buttonText: {
    color: colorScheme.primary.greenBunny[50],
  },
});
