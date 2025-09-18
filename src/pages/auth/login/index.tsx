import { toast } from 'react-toastify';

import logo from "@assets/images/svg/logo-full.svg";

import { PublicLayout } from '@shared/layouts';
import LanguageDropdown from '@shared/layouts/_common/language-popover';

import { LoopingVideoBg } from '@modules/auth/components';

import { useThemeMode } from "@core/hooks/useThemeMode";
import { useLocale } from '@core/hooks/useLocale';

export function Login() {
	const { t } = useLocale();
	const { toggleTheme, mode } = useThemeMode();

	return (
		<>
			<PublicLayout>
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

			</PublicLayout>

			<LoopingVideoBg />
		</>
	);
}
