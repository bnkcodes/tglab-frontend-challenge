import type { ThemeMode } from "@app/contexts";

export type AppConfig = {
	api: {
		baseURL: string;
		timeout: number;
	};
	routes: {
		login: string;
		home: string;
	};
	auth: {
		storageKey: string;
		tokenKey: string;
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
