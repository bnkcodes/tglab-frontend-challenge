import 'locales/i18n'

import { Router } from "@app/router";

import { AppProvider } from "@app/providers";

export function App() {
	return (
    <AppProvider>
			<Router />
    </AppProvider>
  )
}
