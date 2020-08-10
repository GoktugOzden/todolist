/**
 * @format
 */

import { AppRegistry, UIManager, Platform } from 'react-native';
import App from './src/Views/App';
import { name as appName } from './app.json';
import DeviceHelper from './src/Helper/DeviceHelper';
import 'react-native-console-time-polyfill';

if (DeviceHelper.android) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

//console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => App);
