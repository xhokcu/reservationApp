import { StyleSheet } from 'react-native';
import { theme } from 'common/theme/theme';

const {
  borderRadius,
  spacing,
  fontSizes,
  alignItems,
  justifyContent,
  position,
} = theme.components;

export const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: justifyContent.flexEnd,
    alignItems: alignItems.center,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  selectedReservationContainer: {
    position: position.absolute,
    bottom: spacing[4],
    left: spacing[4],
    right: spacing[4],
    backgroundColor: 'white',
    padding: spacing[2],
    borderRadius: borderRadius[2],
    elevation: 5,
  },
  selectedReservationText: {
    fontSize: fontSizes.heading.h7,
    marginBottom: 5,
  },
  closeButton: {
    marginTop: spacing[2],
    backgroundColor: '#DDDDDD',
    padding: spacing[2],
    borderRadius: borderRadius[2],
    alignItems: alignItems.center,
  },
  closeButtonText: {
    fontSize: fontSizes.heading.h7,
  },
});
