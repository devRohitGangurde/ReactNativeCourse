import {AppRegistry} from 'react-native';
// import SplashScreen from './src/screens/splash';
// import LoginScreen from './src/screens/login';
// import FlatListScreen from './src/screens/login/FlatListScreen';
import {name as appName} from './app.json';
// import ModalScreen from './src/screens/login/ModalScreen';
import Navigation from './src/navigation/Navigation';

AppRegistry.registerComponent(appName, () => Navigation);
