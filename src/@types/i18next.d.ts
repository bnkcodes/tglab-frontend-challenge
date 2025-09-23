import 'i18next';

import en from '../locales/langs/en.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translations';
    resources: {
      translations: typeof en;
    };
  }
}
