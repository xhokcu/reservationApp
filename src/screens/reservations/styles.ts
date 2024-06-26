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
    gap: spacing[4],
  },
  headerContainer: {
    flexDirection: flexDirection.row,
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
  },
  label: {
    flex: 1,
    fontFamily: fonts.semiBold,
    color: colorScheme.primary.greenBunny[50],
  },
  outlineButton: {
    backgroundColor: 'transparent',
  },
  logoutText: {
    color: colorScheme.primary.greenBunny[50],
  },
});
