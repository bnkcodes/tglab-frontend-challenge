import logo from "@assets/images/svg/logo-full.svg";
import { AppProvider } from "@core/providers";

export function App() {
  return (
    <AppProvider>

			<img src={logo} alt="TGLab Logo" />

      <p>
        Hello World!
      </p>
    </AppProvider>
  )
}
