import { Injectable } from '@nestjs/common';

import { MovieGenre } from './movie-genre.types';

@Injectable()
export abstract class MovieGenreService {
  public abstract findAll(): Promise<MovieGenre[]>;

  public abstract findOneById(genreId: number): Promise<MovieGenre>;
}
