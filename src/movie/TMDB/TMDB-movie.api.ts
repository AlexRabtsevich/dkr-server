import { Injectable } from '@nestjs/common';

import { TMDBApi } from '@dkr/common/api/TMDB';
import { getData } from '@dkr/common/api/utils/response';
import { concatPath } from '@dkr/common/api/utils/path';
import { DEFAULT_PAGE } from '@dkr/common/constants/pagination';
import { ITMDBDataWithPagination } from '@dkr/common/typings';

import { ITMDBMovie, ITMDBMovieDetails } from './TMDB-movie.types';

@Injectable()
export class TMDBMovieApi extends TMDBApi {
  private static MOVIE_BASE_PATH = '/movie';

  public getMovie(movieId: number) {
    const requestPath = concatPath(TMDBMovieApi.MOVIE_BASE_PATH, movieId.toString());

    return getData(this.httpClient.get<ITMDBMovieDetails>(requestPath));
  }

  public getLatestMovie() {
    const requestPath = concatPath(TMDBMovieApi.MOVIE_BASE_PATH, '/latest');

    return getData(this.httpClient.get<ITMDBMovieDetails>(requestPath));
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
    const requestPath = concatPath(TMDBMovieApi.MOVIE_BASE_PATH, subPath);

    console.log(params);

    return getData(this.httpClient.get<ITMDBDataWithPagination<ITMDBMovie>>(requestPath, { params }));
  }
}
