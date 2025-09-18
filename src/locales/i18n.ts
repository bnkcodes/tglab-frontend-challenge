import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import { localStorageGetItem } from '@shared/utils';

import { appConfig } from '@core/configs';

import { defaultLang } from './config-lang';

import translationEn from './langs/en.json';
import translationPt from './langs/pt.json';
import translationEs from './langs/es.json';

const lng = localStorageGetItem(appConfig.i18n.storageKey, defaultLang.value);

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translations: translationPt },
      en: { translations: translationEn },
      es: { translations: translationEs },
    },
    lng,
    fallbackLng: lng,
    debug: false,
    ns: ['translations'],
    defaultNS: 'translations',
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: appConfig.i18n.storageKey,
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
