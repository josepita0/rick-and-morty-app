export const APP_CONFIG = {
  ENV: {
    IS_PRODUCTION: process?.env?.NEXT_PUBLIC_ENV === "prod",
    API_URL: process?.env?.NEXT_PUBLIC_API_URL,
  },
  LOCALE_ENVS: {
    API_URL: process?.env?.NEXT_PUBLIC_API_URL,
  },
};
