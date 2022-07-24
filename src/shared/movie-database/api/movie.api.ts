import { Injectable } from '@nestjs/common';

import { getData } from '@dkr/common/api/utils/response';
import { concatPath } from '@dkr/common/api/utils/path';
import { DEFAULT_PAGE } from '@dkr/common/constants';

import { IMDMovie, IMDMovieDetails, IMDDataWithPagination } from '../interfaces';
import { BaseTheMovieDatabaseApi } from './base.api';

@Injectable()
export class MDMovieApi extends BaseTheMovieDatabaseApi {
  private static MOVIE_BASE_PATH = '/movie';

  public getMovie(movieId: number) {
    const requestPath = concatPath(MDMovieApi.MOVIE_BASE_PATH, movieId.toString());

    return getData(this.httpClient.get<IMDMovieDetails>(requestPath));
  }

  public getLatestMovie() {
    const requestPath = concatPath(MDMovieApi.MOVIE_BASE_PATH, '/latest');

    return getData(this.httpClient.get<IMDMovieDetails>(requestPath));
  }

  public getPopularMovies(page: number, region?: string) {
    return this.getMovies('/popular', page, region);
  }

  public getTopRatedMovies(page: number, region?: string) {
    return this.getMovies('/top_rated', page, region);
  }

  public getUpcomingMovies(page: number, region?: string) {
    return this.getMovies('/upcoming', page, region);
  }

  private getMovies(subPath: string, page = DEFAULT_PAGE, region?: string) {
    const params = { page, region };
    const requestPath = concatPath(MDMovieApi.MOVIE_BASE_PATH, subPath);

    return getData(this.httpClient.get<IMDDataWithPagination<IMDMovie>>(requestPath, { params }));
  }
}
