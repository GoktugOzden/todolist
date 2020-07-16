/**
 * @format
 */

import { AppRegistry, UIManager, Platform } from 'react-native';
import App from './src/Views/App';
import { name as appName } from './app.json';

if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

//console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => App);
