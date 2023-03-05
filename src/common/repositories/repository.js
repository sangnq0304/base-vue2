import axios from "axios";
import router from "@/router";
import TokenService from "../helpers";

const service = axios.create({
  withCredentials: true,
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 50000,
});

service.interceptors.request.use(
  (config) => {
    const token = TokenService.getToken();
    if (token) {
      config.headers.Authorization = token;
    } else {
      router.push({ name: "login" });
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    return {
      success: true,
      data: response?.data?.data,
    };
  },
  (error) => {
    if (error?.response?.status) {
      switch (error.response.status) {
        case 401:
          TokenService.removeToken();
          router.push({ name: "login" });
          break;
        case 403:
          router.push({ name: "500" });
          break;
        case 404:
          router.push({ name: "404" });
          break;
        case 500:
          router.push({ name: "500" });
          break;
        case 503:
          router.push({ name: "500" });
          break;
        default:
          router.push({ name: "500" });
      }
    }

    return Promise.reject(error);
  }
);
export default service;
