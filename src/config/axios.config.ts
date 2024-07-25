import axios from "axios";
import { APP_CONFIG } from ".";

export const noAuthApi = axios.create({
  baseURL: APP_CONFIG.LOCALE_ENVS.API_URL,
});
