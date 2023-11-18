import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ErrorMessage = ({errorValue}: any) => (
  <View style={styles.container}>
    <Text style={styles.errorText}>{errorValue}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 40,
    marginBottom: 20,
  },
  errorText: {
    color: 'blue',
  },
});

export default ErrorMessage;
