import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";

import { LocaleProviderContext } from "@core/contexts";
import { allLangs, defaultLang } from "locales/config-lang";

interface LocaleProviderProps {
  children: React.ReactNode;
}

export function LocaleProvider({ children }: LocaleProviderProps) {
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
