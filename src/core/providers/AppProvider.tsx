import { GlobalStyle } from "@core/styles"
import { ThemeModeProvider } from "./ThemeModeProvider"

interface Props {
	children: React.ReactNode
};

export function AppProvider({ children }: Props) {
  return (
    <ThemeModeProvider>
			<GlobalStyle />
			{children}
    </ThemeModeProvider>
  )
}
