import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';

import database from '@react-native-firebase/database';

let addItem = (firstName: string, lastName: string) => {
  database().ref('/student').push({
    firstName: firstName,
    lastName: lastName,
  });
};

export default function AddItem({navigation}) {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');

  const handleSubmit = () => {
    addItem(firstName, lastName);
    Alert.alert('Item saved successfully');
    navigation.goBack();
  };
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Add Item</Text>
      <TextInput
        style={styles.itemInput}
        placeholder="Enter FirstName"
        onChangeText={text => setFirstName(text)}
      />
      <TextInput
        style={styles.itemInput}
        placeholder="Enter LastName"
        onChangeText={text => setLastName(text)}
      />
      <TouchableHighlight
        style={styles.button}
        underlayColor="white"
        onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#6565fc',
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
  },
  itemInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center',
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
});
