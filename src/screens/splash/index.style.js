import React from 'react';
import {StyleSheet} from 'react-native';

export const splashScreenStyle = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  textViewStyle: {
    fontSize: 30,
    color: 'white',
    borderWidth: 2,
    borderColor: 'red',
    textAlign: 'center',
    //borderRadius: 100,
    // borderBottomLeftRadius: 50,
    // borderBottomRightRadius: 50,
    // borderTopLeftRadius: 50,
    // width: 300,
    // height: 200,
  },
  hello2Style: {
    fontSize: 30,
    color: 'white',
    borderWidth: 2,
    borderColor: 'red',
    textAlign: 'center',
    // margin: 20,   // outside the border
    //marginStart: 20,
    // paddingTop: 20,
    padding: 20, // inside the border
  },
  imageStyle: {
    width: 300,
    height: 300,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 75,
  },
});
