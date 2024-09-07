import { config } from "../config";
import AxiosInstance from "axios";

export const axios = AxiosInstance.create({
  baseURL: config.API_URL,
  timeout: 5000,
});
