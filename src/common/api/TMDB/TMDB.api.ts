import axios, { Axios } from 'axios';

import { getTMDBBaseApiPath, withTMDBApiKey } from './TMDB.utils';

export class TMDBApi {
  protected httpClient: Axios;

  constructor() {
    this.httpClient = axios.create({ baseURL: getTMDBBaseApiPath() });
    this.httpClient.interceptors.request.use((config) => withTMDBApiKey(config));
  }
}
