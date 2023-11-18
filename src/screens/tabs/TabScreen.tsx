/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {View, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ApiCallScreen from '../login/ApiCallScreen';
import FlatListScreen from '../login/FlatListScreen';
import Webview from '../login/Webview';

const TabApp = createBottomTabNavigator();

const TabScreen = () => {
  return (
    <View style={{flex: 1}}>
      <TabApp.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <TabApp.Screen
          name="Tab1"
          component={ApiCallScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <Image
                style={{width: 20, height: 20}}
                source={require('../../../assets/images/appleLogo.jpg')}
              />
            ),
          }}
        />
        <TabApp.Screen
          name="Tab2"
          component={FlatListScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <Image
                style={{width: 20, height: 20}}
                source={require('../../../assets/images/appleLogo.jpg')}
              />
            ),
          }}
        />
        <TabApp.Screen
          name="Tab4"
          component={Webview}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <Image
                style={{width: 20, height: 20}}
                source={require('../../../assets/images/appleLogo.jpg')}
              />
            ),
          }}
        />
      </TabApp.Navigator>
    </View>
  );
};

export default TabScreen;
