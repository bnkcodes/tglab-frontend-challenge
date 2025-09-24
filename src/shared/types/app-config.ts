import type { ThemeMode } from "@app/contexts";

export type AppConfig = {
	api: {
		baseURL: string;
		cookies: {
			secure: boolean;
			sameSite: "lax" | "strict" | "none" | undefined;
		};
		timeout: number;
	};
	routes: {
		login: string;
		home: string;
	};
	auth: {
		storageKey: string;
	};
	user: {
		storageKey: string;
	};
	theme: {
		storageKey: string;
		default: ThemeMode;
	};
	i18n: {
		storageKey: string;
	},
	header: {
		height: number;
	}
};
