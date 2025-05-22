
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationBG from './locales/bg/translation.json';
import translationEN from './locales/en/translation.json';


i18n.use(initReactI18next).init({
  resources: {
    bg: { translation: translationBG },
    en: { translation: translationEN },
  },
  lng: 'bg', 
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, 
  },
});

export default i18n;
