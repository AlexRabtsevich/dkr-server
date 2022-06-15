import axios, { Axios } from 'axios';

import { getMovieApiBasePath, withMovieApiKey } from './movie.utils';

export class MovieApi {
  protected httpClient: Axios;

  constructor() {
    this.httpClient = axios.create({ baseURL: getMovieApiBasePath() });
    this.httpClient.interceptors.request.use((config) => withMovieApiKey(config));
  }
}
