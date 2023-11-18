/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {Text, View, Button, TextInput} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';

const ModalScreen = (props) => {
  const {firstName,lastName,fruitsArray,onCallbackPress} = props.route.params;
  const [isModalVisible, setModalVisible] = useState(false);
  const [userName, setUserName] = useState('');

  const onBtnPress = () => {
   // setModalVisible(true);
     props.navigation.goBack();
    onCallbackPress();
  };

  const UserNameInput = () => {
    return (
      <TextInput
        placeholder="Enter User Name"
        placeholderTextColor={'gray'}
        onChangeText={input => {
          setUserName(input);
        }}
        value={userName}
        style={{
          backgroundColor: '#FFFfff"',
          marginHorizontal: 20,
          marginTop: 150,
          borderColor: 'black',
          borderWidth: 1,
          borderRadius: 10,
          color: 'gray',
          marginBottom:20,
          width:200
        }}
      />
    );
  };

  const ShowPopUp = () => {
    return (
      <Modal coverScreen={true} animationIn="fadeIn" isVisible={isModalVisible}>
        <View
          style={{
            backgroundColor: 'white',
            height: 500,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'black'}}>Show Modal</Text>
          <UserNameInput />
          <Button title="Close POP up" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    );
  };

  return (
    <View>
      <Text
        style={{
          fontSize: 25,
          color: 'green',
          textAlign: 'center',
          marginTop: 20,
          marginBottom: 100,
        }}>
        Modal Demo example
      </Text>
      <Text
        style={{
          fontSize: 25,
          color: 'green',
          textAlign: 'center',
          marginTop: 20,
          marginBottom: 100,
        }}>
        {'My name '+fruitsArray}
      </Text>

      <Button title="Show Modal" onPress={onBtnPress} />
      <ShowPopUp />
    </View>
  );
};

export default ModalScreen;
