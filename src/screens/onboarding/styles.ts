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
    padding: spacing[5],
  },
  heading: {
    fontFamily: fonts.semiBold,
    fontSize: fontSizes.heading.h3,
  },
  buttonContainer: {
    gap: spacing[4],
  },
  filledButton: {
    width: '100%',
  },
  outlinedButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colorScheme.primary.greenBunny[50],
    width: '100%',
  },
  buttonText: {
    color: colorScheme.primary.greenBunny[50],
  },
  container: {
    width: '100%',
    gap: spacing[4],
  },
});
