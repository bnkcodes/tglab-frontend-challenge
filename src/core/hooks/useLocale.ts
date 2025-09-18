import { useContext } from "react";

import { LocaleProviderContext } from "@core/contexts";

export const useLocale = () => {
  const context = useContext(LocaleProviderContext);

  if (!context) {
    throw new Error("useLocale must be used within a ThemeModeProvider");
  }

  return context;
};
