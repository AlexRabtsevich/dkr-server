import { IGenre } from '@dkr/common/typings';

export type MovieGenre = IGenre;

export interface IMovieGenreResponse {
  genres: MovieGenre[];
}
