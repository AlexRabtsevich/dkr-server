import { IMDMovieGenre } from '@dkr/shared/movie-database';

export type MovieGenre = IMDMovieGenre;

export abstract class AbstractMovieGenreService {
  public abstract findAll(): Promise<MovieGenre[]>;

  public abstract findOneById(genreId: number): Promise<MovieGenre>;
}
