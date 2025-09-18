import type { PropsWithChildren } from "react"
import { Theme } from "@radix-ui/themes";

import { GlobalStyle } from "@core/styles"

import { ThemeModeProvider } from "./ThemeModeProvider"
import { LocaleProvider } from "./LocaleProvider"

export function AppProvider({ children }: PropsWithChildren) {
  return (
		<LocaleProvider>
			<Theme>
				<ThemeModeProvider>
					<GlobalStyle />
					{children}
				</ThemeModeProvider>
			</Theme>
		</LocaleProvider>
  )
}
