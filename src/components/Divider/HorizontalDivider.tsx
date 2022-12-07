import React from 'react';

import { StyleSheet, View, Dimensions } from 'react-native';

import { colors } from 'src/Theme';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  rootDivider: {
    backgroundColor: colors.grey,
    height: 1,
    width,
  },
});

export const HorizontalDivider = () => {
  return <View style={styles.rootDivider} />;
};
