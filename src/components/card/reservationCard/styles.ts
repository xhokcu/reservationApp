import { StyleSheet } from 'react-native';
import { theme } from 'common/theme/theme';

const {
  borderRadius,
  colorScheme,
  spacing,
  fonts,
  fontSizes,
  alignItems,
  flexDirection,
} = theme.components;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: flexDirection.row,
    alignItems: alignItems.center,
    borderRadius: borderRadius[2],
    paddingVertical: spacing[4],
    paddingHorizontal: spacing[4],
    shadowColor: colorScheme.primary.greenBunny[50],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    backgroundColor: 'white',
    gap: spacing[4],
    marginBottom: spacing[4],
  },
  text: {
    flex: 1,
    fontFamily: fonts.regular,
    fontSize: fontSizes.heading.h7,
  },
});
