import { AxiosError, type InternalAxiosRequestConfig } from "axios";
import { appConfig } from "@core/configs";

export const requestInterceptor = (config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem(appConfig.auth.storageKey);

  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }

  return config;
};

export const responseInterceptor = (error: AxiosError) => {
  if (error.response?.status === 401) {
    localStorage.removeItem(appConfig.auth.storageKey);
    window.location.href = appConfig.routes.login;
  }

  return Promise.reject(error);
};
