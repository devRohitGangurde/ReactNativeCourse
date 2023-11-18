import React from 'react';
import {Input} from 'react-native-elements';
import {StyleSheet, View} from 'react-native';

const FormInput = ({name, placeholder, ...rest}: any) => (
  <View style={styles.inputContainer}>
    <Input
      // eslint-disable-next-line react-native/no-inline-styles
      inputContainerStyle={{
        borderWidth: 1.5,
        borderColor: 'black',
        borderRadius: 15,
      }}
      {...rest}
      placeholderTextColor="grey"
      name={name}
      placeholder={placeholder}
      style={styles.input}
    />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 30,
  },
  input: {
    // Add any specific styles for the input here
  },
});

export default FormInput;
