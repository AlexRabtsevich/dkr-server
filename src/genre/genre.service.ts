import { Injectable, NotFoundException } from '@nestjs/common';

import { MovieGenre } from './genre.types';
import { GenreApi } from './genre.api';

@Injectable()
export class GenreService {
  constructor(private readonly genreApi: GenreApi) {}

  public async findAll(): Promise<MovieGenre[]> {
    return await this.genreApi.getMovieGenres();
  }

  public async findOneById(genreId: number): Promise<MovieGenre> {
    const movieGenres = await this.genreApi.getMovieGenres();
    const genre = movieGenres.find(({ id }) => genreId === id);

    if (!genre) {
      throw new NotFoundException();
    }

    return genre;
  }
}
