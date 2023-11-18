/* eslint-disable react-native/no-inline-styles */
import {View, Text, Button} from 'react-native';
import React from 'react';

const HomeScreen = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: 'pink',
        flex: 1,
      }}>
      <Text
        style={{
          color: 'red',
          textAlign: 'center',
          marginTop: 20,
          fontSize: 20,
          paddingHorizontal: 20,
        }}>
        Firebase Real Time database ADD,LIST example
      </Text>
      <View style={{justifyContent: 'center', paddingHorizontal: 50, flex: 1}}>
        <Button
          title="Add an Item"
          onPress={() => navigation.navigate('AddItem')}
        />
        <View style={{height: 20}} />
        <Button
          title="List of Items"
          color="green"
          onPress={() => navigation.navigate('ItemList')}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
