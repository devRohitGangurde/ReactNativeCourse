import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '../screens/splash';
import LoginScreen from '../screens/login';
import FlatListScreen from '../screens/login/FlatListScreen';
import ModalScreen from '../screens/login/ModalScreen';
import Webview from '../screens/login/Webview';
import ApiCallScreen from '../screens/login/ApiCallScreen';
import TabScreen from '../screens/tabs/TabScreen';
import DrawerScreen from '../screens/drawer/DrawerScreen';
import AsyncStorage from '../screens/login/AsyncStorage';
import DateTimePicker from '../screens/login/DateTimePicker';
import FirebaseExample from '../screens/firebase/ItemList';
import HomeScreen from '../screens/firebase/HomeScreen';
import AddItem from '../screens/firebase/AddItem';
import ItemList from '../screens/firebase/ItemList';

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="FlatListScreen" component={FlatListScreen} />
        <Stack.Screen name="ModalScreen" component={ModalScreen} />
        <Stack.Screen name="Webview" component={Webview} />
        <Stack.Screen name="ApiCallScreen" component={ApiCallScreen} />
        <Stack.Screen name="TabScreen" component={TabScreen} />
        <Stack.Screen name="DrawerScreen" component={DrawerScreen} />
        <Stack.Screen name="AsyncStorage" component={AsyncStorage} />
        <Stack.Screen name="DateTimePicker" component={DateTimePicker} />
        <Stack.Screen name="FirebaseExample" component={FirebaseExample} />
        <Stack.Screen
          options={{title: 'Firebase Example'}}
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{title: 'Add To Firebase'}}
          name="AddItem"
          component={AddItem}
        />
        <Stack.Screen
          options={{title: 'Firebase List'}}
          name="ItemList"
          component={ItemList}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
