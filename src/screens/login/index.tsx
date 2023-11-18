/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TextInput, Button, ImageBackground,Switch} from 'react-native';
import AsyncStorageApi from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const [counter, setCounter] = useState(0);
  const [isSwitchEnabled, setSwitchEnabled] = useState(false);


  const imagePath = {
    uri: 'https://img.freepik.com/free-vector/background-realistic-abstract-technology-particle_23-2148431735.jpg?w=1380&t=st=1698418309~exp=1698418909~hmac=6be3ecb3ac6c6120cf29e22168e615d49e3430346760846b51b7b96c180c35f1',
  };

  const LoginTextInput = () => {
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
        }}
      />
    );
  };
  const PasswordTextInput = () => {
    return (
      <TextInput
        placeholder="Enter User Password"
        placeholderTextColor={'gray'}
        onChangeText={input => {
          setUserPassword(input);
        }}
        value={userPassword}
        keyboardType="numeric"
        secureTextEntry={true}
        style={{
          backgroundColor: '#FFFfff',
          marginHorizontal: 20,
          marginTop: 15,
          borderColor: 'black',
          borderWidth: 1,
          borderRadius: 10,
          color: 'gray',
        }}
      />
    );
  };

  const onCallBack = () => {
    alert('Callback received');
  };

  const storeData = async () => {
    try {
      await AsyncStorageApi.setItem('token', 'Rohit123');
    } catch (e) {
      // saving error
    }
  };
  const onLoginPress = () => {
    // alert('text');
    // console.log('Username', userName);
    // console.log('passowrd', userPassword);
    // if (userName.length == 0 || userPassword.length == 0) {
    //   alert('Please enter login password');
    // } else if (userName.length < 6 || userPassword.length < 6) {
    //   alert('Please enter correct user name and password');
    // } else {
    //   alert('Login successfully done');
    // }
    storeData();
    //navigation.navigate('Webview');

    // navigation.navigate('ModalScreen', {
    //   firstName: 'Alice',
    //   lastName: 'Bob',
    //   fruitsArray: ['manago','banana'],
    //   onCallbackPress:onCallBack
    // });

    setCounter(prev => prev + 1);

    // let myCounter = counter;
    // myCounter++;
    // setCounter(myCounter);
  };

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={{flex: 1}}
        resizeMode={'repeat'}
        //source={require('../../../assets/images/appleLogo.jpg')}>
        // source={imagePath}
      >
        <View style={{flex: 1}}>
          <Text
            style={{
              marginTop: 30,
              color: 'blue',
              fontSize: 20,
              textAlign: 'center',
            }}>
            Login Screen
          </Text>

          <LoginTextInput />
          <PasswordTextInput />

          <View style={{marginHorizontal: 20, marginTop: 40}}>
            <Button title="Login" color="red" onPress={onLoginPress} />
          </View>
          <Text
            style={{
              marginTop: 30,
              color: 'blue',
              fontSize: 20,
              textAlign: 'center',
            }}>
            {counter}
          </Text>
          <View style={{flexDirection:'row',justifyContent:"center",alignItems:"center"}}>
          <Text
            style={{
              color: 'blue',
              fontSize: 20,
              textAlign: 'center',
            }}>
            {"Phone is "+isSwitchEnabled}
          </Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isSwitchEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={setSwitchEnabled}
            value={isSwitchEnabled}
           />
           </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
