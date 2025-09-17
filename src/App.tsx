
import { AppProvider } from "@core/providers";
import { Login } from "@pages/auth/login";

export function App() {

	return (
    <AppProvider>
			<Login />
    </AppProvider>
  )
}
