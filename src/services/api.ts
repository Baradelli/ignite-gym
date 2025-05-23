import { AppError } from "@utils/AppError";
import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.0.37:3333",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error?.response && error?.response?.data) {
      return Promise.reject(new AppError(error?.response?.data.message));
    }

    return Promise.reject(error);
  }
);

export { api };
