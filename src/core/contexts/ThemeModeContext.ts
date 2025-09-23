import { createContext } from "react"

export type ThemeMode = 'dark' | 'light' | 'system'

interface ThemeModeContextValue {
  mode: ThemeMode
  toggleTheme: () => void
  setTheme: (theme: ThemeMode) => void
}

const initialState: ThemeModeContextValue = {
	mode: 'system',
  toggleTheme: () => null,
  setTheme: () => null
}

export const ThemeModeProviderContext = createContext<ThemeModeContextValue>(initialState)
