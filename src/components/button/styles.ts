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
  button: {
    width: 'auto',
    backgroundColor: colorScheme.primary.greenBunny[50],
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[5],
    borderRadius: borderRadius[2],
    alignItems: alignItems.center,
    justifyContent: justifyContent.center,
  },
  text: {
    color: '#ffffff',
    fontFamily: fonts.regular,
    fontSize: fontSizes.body.b2,
  },
});
