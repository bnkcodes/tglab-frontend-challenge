import { useContext } from "react";

import { ThemeModeProviderContext } from "@core/contexts";

export const useThemeMode = () => {
  const context = useContext(ThemeModeProviderContext);

  if (!context) {
    throw new Error("useThemeMode must be used within a ThemeModeProvider");
  }

  return context;
};
