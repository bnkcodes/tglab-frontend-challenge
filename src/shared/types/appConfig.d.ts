import type { ThemeMode } from "@core/contexts/ThemeModeContext";

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
};
