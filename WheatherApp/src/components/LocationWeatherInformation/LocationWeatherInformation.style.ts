import { StyleSheet } from 'react-native';

import { colors } from '../../Theme';

export const styles = StyleSheet.create({
  locationItemRoot: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  locationInfoContainer: {
    flex: 1,
  },
  locationIcon: {
    width: 50,
    height: 50,
  },
  locationText: {
    fontWeight: 'bold',
  },
  locationWeatherTempPill: {
    backgroundColor: colors.blue,
    borderRadius: 50,
    paddingHorizontal: 16,
    paddingVertical: 4,
    justifyContent: 'center',
  },
  locationWeatherTempText: {
    fontSize: 16,
    color: colors.floralWhite,
  },
});
