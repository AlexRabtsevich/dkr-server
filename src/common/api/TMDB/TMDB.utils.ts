import { AxiosRequestConfig } from 'axios';

export const getTMDBBaseApiPath = () => process.env.TMDB_API_PATH;

export const withTMDBApiKey = (config: AxiosRequestConfig) => {
  const params = { ...config.params, api_key: process.env.TMDB_API_KEY };
  Object.assign(config, { params });

  return config;
};
