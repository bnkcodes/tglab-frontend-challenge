import "@radix-ui/themes/styles.css";
import 'locales/i18n'

import { Router } from "router";

import { AppProvider } from "@core/providers";

export function App() {
	return (
    <AppProvider>
			<Router />
    </AppProvider>
  )
}
