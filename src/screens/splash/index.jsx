/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, ImageBackground} from 'react-native';
import {splashScreenStyle} from './index.style';
import AsyncStorageApi from '@react-native-async-storage/async-storage';
import firebase from '@react-native-firebase/app';

const SplashScreen = ({navigation}) => {
  const getData = async () => {
    try {
      const value = await AsyncStorageApi.getItem('token');
      if (value !== null) {
        // value previously stored
        navigation.navigate('DateTimePicker');
      } else {
        navigation.navigate('LoginScreen');
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    // setTimeout(() => {
    //   getData();
    // }, 1000);
    var config = {
      databaseURL: 'https://basicreactnativedemo-default-rtdb.firebaseio.com/',
      projectId: 'basicreactnativedemo',
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    navigation.navigate('Maps');
  }, []);

  return (
    <View style={splashScreenStyle.mainViewContainer}>
      <ImageBackground
        style={{flex: 1}}
        resizeMode={'contain'}
        source={require('../../../assets/images/appleLogo.jpg')}
      />
      {/* <Text style={splashScreenStyle.textViewStyle}>Hello 1</Text>
      <Text style={splashScreenStyle.hello2Style}>Hello 2</Text> */}
      {/* <View style={{backgroundColor: 'blue', flex: 1}}>
        <View style={{backgroundColor: 'red', flex: 0.5}}>
          <Text style={{color: 'white'}}>Text 1</Text>
          <Text style={{color: 'white', position: 'absolute', bottom: 0}}>
            Text 2
          </Text>
        </View>

        <View style={{backgroundColor: 'orange', flex: 0.5}} /> */}
      {/* </View> */}
    </View>
  );
};

export default SplashScreen; // compularsy
