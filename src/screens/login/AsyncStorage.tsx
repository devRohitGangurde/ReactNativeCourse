/* eslint-disable react-native/no-inline-styles */
import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';
import AsyncStorageApi from '@react-native-async-storage/async-storage';

const AsyncStorage = () => {
  const [myUserId, setUserId] = useState('');

  const storeData = async () => {
    try {
      await AsyncStorageApi.setItem('token', 'Rohit123');
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorageApi.getItem('token');
      if (value !== null) {
        // value previously stored
        setUserId(value);
      }
    } catch (e) {
      // error reading value
    }
  };

  return (
    <View>
      <View style={{height: 100}} />
      <Button title="STORE DATA" onPress={storeData} />
      <View style={{height: 100}} />
      <Button title="GET DATA" onPress={getData} />
      <View style={{height: 100}} />
      <Text style={{color: 'blue', fontSize: 20}}>{myUserId}</Text>
    </View>
  );
};

export default AsyncStorage;
