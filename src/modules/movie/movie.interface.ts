import type { CamelCasedPropertiesDeep } from 'type-fest';

import { ResultsWithPagination } from '@dkr/common/typings';
import {
  IMDMovie,
  IMDMovieDetails,
  IMDMovieProductionCompany,
  IMDMoveSpokenLanguage,
  IMDMovieProductionCountry,
} from '@dkr/shared/movie-database';

export type Movie = CamelCasedPropertiesDeep<IMDMovie>;

export type MovieDetails = CamelCasedPropertiesDeep<IMDMovieDetails>;

export type MovieProductionCompany = CamelCasedPropertiesDeep<IMDMovieProductionCompany>;

export type MovieProductionCountry = CamelCasedPropertiesDeep<IMDMovieProductionCountry>;

export type MovieSpokenLanguage = CamelCasedPropertiesDeep<IMDMoveSpokenLanguage>;

export abstract class AbstractMovieService {
  public abstract getMovieById(movieId: number): Promise<MovieDetails>;

  public abstract getLatestMovie(): Promise<MovieDetails>;

  public abstract getPopularMovies(page: number, region?: string): Promise<ResultsWithPagination<Movie>>;

  public abstract getTopRatedMovies(page: number, region?: string): Promise<ResultsWithPagination<Movie>>;

  public abstract getUpcomingMovies(page: number, region?: string): Promise<ResultsWithPagination<Movie>>;
}
