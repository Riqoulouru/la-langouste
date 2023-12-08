// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import commonEn from './public/locales/en/common.json';
import commonFr from './public/locales/fr/common.json';
import commonCh from './public/locales/ch/common.json';
import indexCh from './public/locales/ch/index.json';
import indexEn from './public/locales/en/index.json';
import indexFr from './public/locales/fr/index.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: commonEn,
      index: indexEn,
    },
    fr: {
      translation: commonFr,
      index: indexFr,
    },
    chinese: { // Correction de la clé pour la langue chinoise
      translation: commonCh,
      index: indexCh,
    },
  },
  lng: 'fr',
  fallbackLng: 'fr',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
