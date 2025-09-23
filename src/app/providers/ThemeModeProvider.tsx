import { useCallback, useEffect, useMemo, useState, type PropsWithChildren } from "react"
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles'
import { ThemeProvider } from "styled-components"
import { ToastContainer } from "react-toastify"

import { appConfig } from "@app/configs"
import { lightTheme, darkTheme, joyTheme } from "@app/themes"
import { ThemeModeProviderContext, type ThemeMode } from "@app/contexts"

interface ThemeModeProviderProps extends PropsWithChildren {
  defaultMode?: ThemeMode
  storageKey?: string
}

function JoyModeSync({ mode }: { mode: ThemeMode }) {
  const { setMode } = useColorScheme()

  useEffect(() => {
    setMode(mode as 'light' | 'dark' | 'system')
  }, [mode, setMode])

  return null
}

export function ThemeModeProvider({
  children,
  defaultMode = appConfig.theme.default,
  storageKey = appConfig.theme.storageKey,
}: ThemeModeProviderProps) {
  const [mode, setMode] = useState<ThemeMode>(() => {
		const saved = localStorage.getItem(storageKey) as ThemeMode;
    return saved ?? defaultMode
	})

  const toggleTheme = useCallback(() => {
    setMode((prevTheme) => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark';

      localStorage.setItem(storageKey, newTheme)
      return newTheme;
    })
  }, [storageKey])

  const setTheme = useCallback((m: ThemeMode) => {
    localStorage.setItem(storageKey, m)
    setMode(m)
  }, [storageKey])

  const value = useMemo(
    () => ({ mode, toggleTheme, setTheme }),
    [mode, toggleTheme, setTheme]
  )

  const resolvedMode = useMemo<Exclude<ThemeMode, 'system'>>(() => {
    if (mode === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    return mode
  }, [mode])

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(resolvedMode)
  }, [resolvedMode])

  return (
    <ThemeModeProviderContext.Provider value={value}>
      <CssVarsProvider theme={joyTheme} defaultMode={defaultMode} modeStorageKey={storageKey}>
        <JoyModeSync mode={mode} />
        <ThemeProvider theme={resolvedMode === "dark" ? darkTheme : lightTheme}>
          {children}

          <ToastContainer
            theme={resolvedMode === "dark" ? "dark" : "light"}
            position="top-right"
          />
        </ThemeProvider>
      </CssVarsProvider>
    </ThemeModeProviderContext.Provider>
  )
}
