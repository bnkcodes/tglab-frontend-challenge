import { createContext } from "react";
import type { TFunction } from "i18next";
import type { defaultLang } from "locales/config-lang";

export type Lang = typeof defaultLang;

export interface LocaleContextValue {
  t: TFunction;
  currentLang: Lang;
	allLangs: Lang[];
  onChangeLang: (lang: string) => void;
}

export const LocaleProviderContext = createContext<LocaleContextValue | undefined>(undefined);
