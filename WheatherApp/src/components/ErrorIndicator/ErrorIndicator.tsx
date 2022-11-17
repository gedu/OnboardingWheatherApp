import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  rootLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export const ErrorIndicator = () => {
  return (
    <View style={styles.rootLoading}>
      <Text style={styles.errorTitle}>Ups!</Text>
      <Text>Something went wrong.</Text>
    </View>
  );
};
