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
    padding: spacing[5],
    alignItems: alignItems.flexStart,
    justifyContent: justifyContent.center,
    gap: spacing[5],
  },
  switch: {
    flexDirection: flexDirection.row,
    justifyContent: justifyContent.spaceBetween,
  },
  tab: {
    flex: 1,
    height: 48,
    alignItems: alignItems.center,
    justifyContent: justifyContent.center,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: colorScheme.primary.greenBunny[50],
  },
  inactiveTab: {},
  tabText: {},
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
  filledButton: {
    backgroundColor: colorScheme.primary.greenBunny[50],
    width: '100%',
  },
  disabledButton: {
    backgroundColor: colorScheme.primary.darkBunny[30],
    width: '100%',
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
  },
  inputContainer: {
    gap: spacing[2],
    width: '100%',
  },
  outlinedButton: {
    backgroundColor: 'transparent',
    width: '100%',
  },
  coloredText: {
    color: colorScheme.primary.greenBunny[50],
  },
  buttonContainer: {
    width: '100%',
    gap: spacing[1],
  },
});
