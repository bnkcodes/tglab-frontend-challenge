import type { AppConfig } from "@shared/types";

const requiredEnvVars = ["VITE_BACKEND_URL"];
const missingEnvVars = requiredEnvVars.filter((envVar) => !import.meta.env[envVar]);

if (missingEnvVars.length > 0) {
  throw new Error(`Missing required environment variables: ${missingEnvVars.join(", ")}`);
}

export const appConfig: AppConfig = {
	api: {
		baseURL: import.meta.env.VITE_BACKEND_URL,
		timeout: 10000,
	},
	routes: {
		login: "/signin",
		home: "/",
	},
  auth: {
    storageKey: "tg:authToken",
    tokenKey: "token",
  },
	theme:{
		storageKey: "tg:themeMode",
		default: "system"
	},
	i18n: {
		storageKey: "tg:i18nextLng"
	},
	header: {
		height: 86,
	}
};
