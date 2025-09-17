import { GlobalStyle } from "@core/styles"


interface Props {
	children: React.ReactNode
};

export function AppProvider({ children }: Props) {
  return (
    <>
			<GlobalStyle />
			{children}
    </>
  )
};
