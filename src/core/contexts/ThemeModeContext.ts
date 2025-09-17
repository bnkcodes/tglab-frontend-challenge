import { createContext } from "react"

export type ThemeMode = 'dark' | 'light' | 'system'

interface ThemeModeProviderState {
  mode: ThemeMode
	resolvedMode: Omit<ThemeMode, "system">;
  toggleTheme: () => void
  setTheme: (theme: ThemeMode) => void
}

const initialState: ThemeModeProviderState = {
	mode: 'system',
	resolvedMode: "light",
  toggleTheme: () => null,
  setTheme: () => null
}

export const ThemeModeProviderContext = createContext<ThemeModeProviderState>(initialState)
