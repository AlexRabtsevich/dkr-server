import { AxiosRequestConfig } from 'axios';

export const getMovieApiBasePath = () => process.env.THE_MOVIE_DB_API_PATH;

export const withMovieApiKey = (config: AxiosRequestConfig) => {
  const params = { api_key: process.env.THE_MOVIE_DB_API_KEY };
  Object.assign(config, { params });

  return config;
};
