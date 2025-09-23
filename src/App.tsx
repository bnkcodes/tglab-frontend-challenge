import 'locales/i18n'
import '@app/configs/zod-error-map';

import { Router } from "@app/router";

import { AppProvider } from "@app/providers";

export function App() {
	return (
    <AppProvider>
			<Router />
    </AppProvider>
  )
}
