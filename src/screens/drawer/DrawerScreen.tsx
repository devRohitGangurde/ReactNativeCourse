import {View} from 'react-native';
import React from 'react';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import ApiCallScreen from '../login/ApiCallScreen';
import FlatListScreen from '../login/FlatListScreen';
// const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  return (
    <View>
      {/* <Drawer.Navigator>
        <Drawer.Screen name="ApiCallScreen" component={ApiCallScreen} />
        <Drawer.Screen name="FlatListScreen" component={FlatListScreen} />
      </Drawer.Navigator> */}
    </View>
  );
};

export default DrawerScreen;
