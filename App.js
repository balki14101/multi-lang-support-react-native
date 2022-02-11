/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import './src/translation/i18n';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {useTranslation} from 'react-i18next';
import LottieView from 'lottie-react-native';
import SplashVarient from './assets/pbLoader.json';

const App = () => {
  const {t, i18n} = useTranslation();

  const [currentLanguage, setLanguage] = useState('en');

  const changeLanguage = value => {
    i18n
      .changeLanguage(value)
      .then(() => setLanguage(value))
      .catch(err => console.log(err));
  };

  return (
    <View style={styles.container}>
      <LottieView
        source={require('./assets/72260-smile-face-splash-screen.json')}
        autoPlay
        loop
        style={{height: 100}}
      />
      <Text style={styles.text}>{t('hello')} </Text>
      {/* <Text style={styles.text}>{t('this line is translated')}</Text> */}
      <View style={{marginTop: 8}}>
        <TouchableOpacity
          onPress={() => changeLanguage('en')}
          style={[
            styles.button,
            {
              backgroundColor: currentLanguage === 'en' ? '#33A850' : '#d3d3d3',
            },
          ]}>
          <Text style={styles.buttontext}>English</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => changeLanguage('tn')}
          style={[
            styles.button,
            {
              backgroundColor: currentLanguage === 'tn' ? '#33A850' : '#d3d3d3',
            },
          ]}>
          <Text style={styles.buttontext}>தமிழ்</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => changeLanguage('ml')}
          style={[
            styles.button,
            {
              backgroundColor: currentLanguage === 'ml' ? '#33A850' : '#d3d3d3',
            },
          ]}>
          <Text style={styles.buttontext}>മലയാളം</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => changeLanguage('ar')}
          style={[
            styles.button,
            {
              backgroundColor: currentLanguage === 'ar' ? '#33A850' : '#d3d3d3',
            },
          ]}>
          <Text style={styles.buttontext}>عربى</Text>
        </TouchableOpacity>
      </View>
      <LottieView source={SplashVarient} autoPlay loop style={{height: 100}} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#33A850',
  },
  button: {
    // backgroundColor: currentLanguage === 'ar' ? '#33A850' : '#d3d3d3',
    // padding: 20,
    height: 50,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  buttontext: {
    fontWeight: 'bold',
  },
});
