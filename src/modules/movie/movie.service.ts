import { Injectable } from '@nestjs/common';
import camelcaseKeys from 'camelcase-keys';

import { ResultsWithPagination } from '@dkr/common/typings';
import { MDMovieApi } from '@dkr/shared/movie-database';

import { Movie, MovieDetails, AbstractMovieService } from './movie.interface';

@Injectable()
export class MovieService extends AbstractMovieService {
  constructor(private movieApi: MDMovieApi) {
    super();
  }

  public async getMovieById(movieId: number): Promise<MovieDetails> {
    const movie = await this.movieApi.getMovie(movieId);

    return camelcaseKeys(movie, { deep: true });
  }

  public async getLatestMovie(): Promise<MovieDetails> {
    const movie = await this.movieApi.getLatestMovie();

    return camelcaseKeys(movie, { deep: true });
  }

  public async getPopularMovies(page: number, region?: string): Promise<ResultsWithPagination<Movie>> {
    const resultWithPagination = await this.movieApi.getPopularMovies(page, region);

    return camelcaseKeys(resultWithPagination, { deep: true });
  }

  public async getTopRatedMovies(page: number, region?: string): Promise<ResultsWithPagination<Movie>> {
    const resultWithPagination = await this.movieApi.getTopRatedMovies(page, region);

    return camelcaseKeys(resultWithPagination, { deep: true });
  }

  public async getUpcomingMovies(page: number, region?: string): Promise<ResultsWithPagination<Movie>> {
    const resultWithPagination = await this.movieApi.getUpcomingMovies(page, region);

    return camelcaseKeys(resultWithPagination, { deep: true });
  }
}
