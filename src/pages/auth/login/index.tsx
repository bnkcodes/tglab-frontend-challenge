import { toast } from 'react-toastify';

import logo from "@assets/images/svg/logo-full.svg";
import { useThemeMode } from "@core/hooks/useThemeMode";
import LanguageDropdown from '@shared/layouts/_common/language-popover';
import { useLocale } from '@core/hooks/useLocale';

export function Login() {
	const { t } = useLocale();
	const { toggleTheme, mode } = useThemeMode();

	return (
		<>
			<img src={logo} alt="TGLab Logo" />

			<div style={{ display: 'flex', gap: 20 }}>
				<button onClick={toggleTheme}>
					Toggle to {mode === "light" ? "dark" : "light"} mode
				</button>

				<button onClick={() => toast.success("Success Toast!")}>
					Sucess Toast
				</button>

				<button onClick={() => toast.error("Error Toast!")}>
					Error Toast
				</button>

				<button onClick={() => toast.info("Info Toast!")}>
					Info Toast
				</button>

				<button onClick={() => toast.warning("Warning Toast!")}>
					Warning Toast
				</button>
			</div>

			<LanguageDropdown />

			<h1>{t('hello')}</h1>

			<video
				autoPlay
				muted
				playsInline
				loop
				style={{ width: '100%', height: 'auto' }}
			>
				<source
					src="https://tglab.com/wp-content/themes/tglab/resources/videos/hero-video-desktop1.mp4"
					type="video/mp4"
				/>
			</video>
		</>
	);
}
