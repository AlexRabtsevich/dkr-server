import { Injectable } from '@nestjs/common';

import { ResultsWithPagination } from '@dkr/common/typings';

import { Movie, MovieDetails } from './movie.types';

@Injectable()
export abstract class MovieService {
  public abstract getMovieById(movieId: number): Promise<MovieDetails>;

  public abstract getLatestMovie(): Promise<MovieDetails>;

  public abstract getPopularMovies(page: number, region?: string): Promise<ResultsWithPagination<Movie>>;

  public abstract getTopRatedMovies(page: number, region?: string): Promise<ResultsWithPagination<Movie>>;

  public abstract getUpcomingMovies(page: number, region?: string): Promise<ResultsWithPagination<Movie>>;
}
