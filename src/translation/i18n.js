import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './english.json';
import tn from './tamil.json';
import ml from './malayalam.json';
import ar from './arabic.json';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: en,
    tn: tn,
    ar: ar,
    ml: ml,
  },
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
