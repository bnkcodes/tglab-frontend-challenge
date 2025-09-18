import { useCallback, useMemo, useState, type PropsWithChildren } from "react"
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify"

import { appConfig } from "@core/configs"
import { lightTheme, darkTheme } from "@core/themes"
import { ThemeModeProviderContext, type ThemeMode } from "@core/contexts"

interface ThemeModeProviderProps extends PropsWithChildren {
  defaultMode?: ThemeMode
  storageKey?: string
}

const prefersDark = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches;

export function ThemeModeProvider({
  children,
  defaultMode = appConfig.theme.default,
  storageKey = appConfig.theme.storageKey,
}: ThemeModeProviderProps) {
  const getInitialMode = () => {
    const saved = localStorage.getItem(storageKey) as ThemeMode | null;
    return saved ?? defaultMode;
  };

  const [mode, setMode] = useState<ThemeMode>(getInitialMode);

	const resolvedMode = useMemo<Omit<ThemeMode, "system">	>(
		() => (mode === "system" ? (prefersDark() ? "dark" : "light") : mode),
		[mode]
	)

	const theme = resolvedMode === "dark" ? darkTheme : lightTheme;

  const toggleTheme = useCallback(() => {
    setMode((prev) => {
      const next: ThemeMode =
        prev === "system"
          ? prefersDark() ? "light" : "dark"
          : prev === "dark"
          ? "light"
          : "dark";

      localStorage.setItem(storageKey, next);
      return next;
    });
  }, [storageKey]);

	const setTheme = useCallback((m: ThemeMode) => {
		localStorage.setItem(storageKey, m);
		setMode(m);
	}, [storageKey]);

	const value = useMemo(
		() => ({ mode, resolvedMode, toggleTheme, setTheme, theme }),
		[mode, resolvedMode, toggleTheme, setTheme, theme]
	);

  return (
		<ThemeModeProviderContext.Provider value={value}>
			<ThemeProvider theme={theme}>
				{children}

				<ToastContainer
					theme={resolvedMode === "dark" ? "dark" : "light"}
					position="top-right"
				/>
			</ThemeProvider>
		</ThemeModeProviderContext.Provider>
  )
}
