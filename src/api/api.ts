import axios from "axios";

import { appConfig } from "@core/configs"
import { requestInterceptor, responseInterceptor } from "./interceptors";

export const api = axios.create({
  baseURL: appConfig.api.baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(requestInterceptor);
api.interceptors.response.use((response) => response, responseInterceptor);
