const requiredEnvVars = ["VITE_BACKEND_URL"];
const missingEnvVars = requiredEnvVars.filter((envVar) => !import.meta.env[envVar]);

if (missingEnvVars.length > 0) {
  throw new Error(`Missing required environment variables: ${missingEnvVars.join(", ")}`);
}

export const appConfig = {
  auth: {
    storageKey: "tglab-frontend-challenge-token",
    tokenKey: "token",
  },
  api: {
    baseURL: import.meta.env.VITE_BACKEND_URL,
    timeout: 10000,
  },
  routes: {
    login: "/login",
    home: "/",
  },
};
