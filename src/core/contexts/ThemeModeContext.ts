import { createContext } from "react"

export type ThemeMode = 'dark' | 'light' | 'system'

interface ThemeModeContextValue {
  mode: ThemeMode
	resolvedMode: Omit<ThemeMode, "system">;
  toggleTheme: () => void
  setTheme: (theme: ThemeMode) => void
}

const initialState: ThemeModeContextValue = {
	mode: 'system',
	resolvedMode: "light",
  toggleTheme: () => null,
  setTheme: () => null
}

export const ThemeModeProviderContext = createContext<ThemeModeContextValue>(initialState)
