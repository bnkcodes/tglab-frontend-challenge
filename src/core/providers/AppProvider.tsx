import type { PropsWithChildren } from "react"

import { GlobalStyle } from "@core/styles"

import { ThemeModeProvider } from "./ThemeModeProvider"
import { LocaleProvider } from "./LocaleProvider"

export function AppProvider({ children }: PropsWithChildren) {
  return (
		<LocaleProvider>
			<ThemeModeProvider>
				<GlobalStyle />
				{children}
			</ThemeModeProvider>
		</LocaleProvider>
  )
}
