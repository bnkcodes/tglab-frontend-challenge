import type { PropsWithChildren } from "react"

import { GlobalStyle } from "@app/styles"

import { ThemeModeProvider } from "./ThemeModeProvider"
import { LocaleProvider } from "./LocaleProvider"
import { ReduxProvider } from "./ReduxProvider"
import { AuthProvider } from "./AuthProvider"
import { SWRProvider } from "./SWRProvider";

export function AppProvider({ children }: PropsWithChildren) {
  return (
		<SWRProvider>
			<ReduxProvider>
				<LocaleProvider>
					<ThemeModeProvider>
						<AuthProvider>
							<GlobalStyle />
							{children}
						</AuthProvider>
					</ThemeModeProvider>
				</LocaleProvider>
			</ReduxProvider>
		</SWRProvider>
  )
}
