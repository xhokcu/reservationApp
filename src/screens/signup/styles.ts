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
    padding: spacing[5],
    alignItems: alignItems.flexStart,
    justifyContent: justifyContent.center,
    gap: spacing[5],
  },
  textContainer: {
    gap: spacing[2],
  },
  heading: {
    fontFamily: fonts.semiBold,
    fontSize: fontSizes.heading.h3,
  },
  regularText: {
    fontFamily: fonts.regular,
    fontSize: fontSizes.heading.h7,
  },

  buttonContainer: {
    gap: spacing[4],
    alignItems: alignItems.center,
    justifyContent: justifyContent.center,
  },
  disabledButton: {
    backgroundColor: colorScheme.primary.darkBunny[30],
    width: '100%',
  },
  filledButton: {
    backgroundColor: colorScheme.primary.greenBunny[50],
    width: '100%',
  },
  outlinedButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colorScheme.primary.greenBunny[50],
  },
  buttonText: {
    color: colorScheme.primary.greenBunny[50],
  },
  inputContainer: {
    width: '100%',
    gap: spacing[2],
  },
  input: {
    width: '100%',
    height: 48,
    borderColor: '#dddddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontSize: 16,
    color: '#333333',
  },
  inputLabel: {
    fontFamily: fonts.semiBold,
    fontSize: fontSizes.body.b3,
    color: colorScheme.primary.greenBunny[50],
  },
  inputSubcontainer: {
    gap: spacing[1],
  },
  footerContainer: {
    width: '100%',
    gap: spacing[2],
  },
  textButton: {
    backgroundColor: 'transparent',
    width: '100%',
  },
  coloredText: {
    color: colorScheme.primary.greenBunny[50],
  },
});
