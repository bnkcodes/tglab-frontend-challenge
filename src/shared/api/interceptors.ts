import { AxiosError, type InternalAxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

import { appConfig } from "@app/configs";

export const requestInterceptor = (config: InternalAxiosRequestConfig) => {
  const token = Cookies.get(appConfig.auth.storageKey);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};

export const responseInterceptor = (error: AxiosError) => {
  if (error.response?.status === 401) {
    Cookies.remove(appConfig.auth.storageKey);
    window.location.href = appConfig.routes.login;
  }

  return Promise.reject(error);
};
