import { GlobalStyle } from "@core/styles"

import { ThemeModeProvider } from "./ThemeModeProvider"
import { LocaleProvider } from "./LocaleProvider"

interface Props {
	children: React.ReactNode
};

export function AppProvider({ children }: Props) {
  return (
		<LocaleProvider>
			<ThemeModeProvider>
				<GlobalStyle />
				{children}
			</ThemeModeProvider>
		</LocaleProvider>
  )
}
