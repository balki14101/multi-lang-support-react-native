/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Splash from './src/screen/splash';
// import i18n from './src/translation/i18n';
import {name as appName} from './app.json';
// import App from './App';

AppRegistry.registerComponent(appName, () => Splash);
