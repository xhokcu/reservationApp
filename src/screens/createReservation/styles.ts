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
    padding: spacing[5],
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
  disableInput: {
    height: 48,
    width: '100%',
    borderColor: '#dddddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontSize: 16,
    color: '#333333',
    backgroundColor: colorScheme.primary.darkBunny[10],
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
  inputContainer: {
    gap: spacing[4],
    width: '100%',
  },
  placeholderStyle: {
    color: '#cccccc',
  },
  dateContainer: {
    flexDirection: flexDirection.row,
    alignItems: alignItems.flexStart,
  },
  dateTimeContainer: {
    flexDirection: flexDirection.row,
    justifyContent: justifyContent.spaceBetween,
  },
});
