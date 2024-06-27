import { StyleSheet } from 'react-native';
import { theme } from 'common/theme/theme';

const { alignItems, justifyContent } = theme.components;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: justifyContent.center,
    alignItems: alignItems.center,
  },
});
