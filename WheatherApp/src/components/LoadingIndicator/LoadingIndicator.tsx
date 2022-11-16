import React from 'react';

import { ActivityIndicator, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  rootLoading: {
    flex: 1,
    justifyContent: 'center',
  },
});

export const LoadingIndicator = () => {
  return (
    <View style={styles.rootLoading}>
      <ActivityIndicator size="large" />
    </View>
  );
};
