import { useCallback, useMemo, type PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";

import { allLangs, defaultLang } from "locales/config-lang";

import { LocaleProviderContext } from "@app/contexts";

export function LocaleProvider({ children }: PropsWithChildren) {
  const { i18n, t } = useTranslation();

  const currentLang = useMemo(
    () => allLangs.find(l => l.value === i18n.language) || defaultLang,
    [i18n.language]
  );

  const onChangeLang = useCallback(
    (newLang: string) => {
      if (newLang && newLang !== i18n.language) {
        i18n.changeLanguage(newLang);
      }
    },
    [i18n]
  );

  const value = useMemo(
    () => ({ t, currentLang, allLangs, onChangeLang }),
    [t, currentLang, onChangeLang]
  );

  return (
    <LocaleProviderContext.Provider value={value}>
      {children}
    </LocaleProviderContext.Provider>
  );
}
