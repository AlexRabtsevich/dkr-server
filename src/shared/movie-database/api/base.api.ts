import axios, { Axios } from 'axios';

import { getMovieDatabaseApiBasePath, withMovieDatabaseApiKey } from '../utils/movie-database.api';

export class BaseTheMovieDatabaseApi {
  protected httpClient: Axios;

  constructor() {
    this.httpClient = axios.create({ baseURL: getMovieDatabaseApiBasePath() });
    this.httpClient.interceptors.request.use((config) => withMovieDatabaseApiKey(config));
  }
}
