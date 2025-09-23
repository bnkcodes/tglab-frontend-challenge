import { useContext } from "react";

import { ThemeModeProviderContext } from "@app/contexts";

export const useThemeMode = () => {
  const context = useContext(ThemeModeProviderContext);

  if (!context) {
    throw new Error("useThemeMode must be used within a ThemeModeProvider");
  }

  return context;
};
