import { Injectable } from '@nestjs/common';

import { getData } from '@dkr/common/api/utils/response';
import { concatPath } from '@dkr/common/api/utils/path';
import { DEFAULT_PAGE } from '@dkr/common/constants';

import { IMDMovie, IMDMovieDetails, IMDDataWithPagination, IMDDiscoverMoviesParams } from '../interfaces';
import { BaseMDApi } from './base.api';

const concatImageSrc = (imagePath: string, quality: string) => `${process.env.MOVIE_IMAGES_URL}/${quality}${imagePath}`;

@Injectable()
export class MDMovieApi extends BaseMDApi {
  private static MOVIE_BASE_PATH = '/movie';

  public async getMovie(movieId: number) {
    const requestPath = concatPath(MDMovieApi.MOVIE_BASE_PATH, movieId.toString());
    const response = await getData(this.httpClient.get<IMDMovieDetails>(requestPath));
    response.poster_path = response.poster_path ? concatImageSrc(response.poster_path, 'original') : null;
    response.backdrop_path = response.backdrop_path ? concatImageSrc(response.backdrop_path, 'original') : null;

    return response;
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

  public async discoverMovies(params: IMDDiscoverMoviesParams): Promise<IMDDataWithPagination<IMDMovie>> {
    const requestPath = '/discover/movie';
    const response = await getData(this.httpClient.get<IMDDataWithPagination<IMDMovie>>(requestPath, { params }));
    response.results = this.addMoviesImagesUrl(response.results);

    return response;
  }

  private async getMovies(subPath: string, page = DEFAULT_PAGE, region?: string) {
    const params = { page, region };
    const requestPath = concatPath(MDMovieApi.MOVIE_BASE_PATH, subPath);
    const response = await getData(this.httpClient.get<IMDDataWithPagination<IMDMovie>>(requestPath, { params }));
    response.results = this.addMoviesImagesUrl(response.results);

    return response;
  }

  private addMoviesImagesUrl(movies: IMDMovie[]): IMDMovie[] {
    return movies.map((movie) => ({
      ...movie,
      poster_path: movie.poster_path ? concatImageSrc(movie.poster_path, 'w500') : null,
      backdrop_path: movie.poster_path ? concatImageSrc(movie.backdrop_path, 'w500') : null,
    }));
  }
}
