import { AxiosRequestConfig } from 'axios';

export const getMovieDatabaseApiBasePath = () => process.env.MOVIE_DATABASE_URL;

export const withMovieDatabaseApiKey = (config: AxiosRequestConfig) => {
  const params = { ...config.params, api_key: process.env.MOVIE_DATABASE_API_KEY };
  Object.assign(config, { params });

  return config;
};
