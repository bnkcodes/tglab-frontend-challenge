import type { PropsWithChildren } from "react"
import { Theme } from "@radix-ui/themes";

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
					<Theme>
						<ThemeModeProvider>
							<AuthProvider>
								<GlobalStyle />
								{children}
							</AuthProvider>
						</ThemeModeProvider>
					</Theme>
				</LocaleProvider>
			</ReduxProvider>
		</SWRProvider>
  )
}
