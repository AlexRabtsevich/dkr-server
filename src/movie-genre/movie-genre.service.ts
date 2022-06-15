import { Injectable, NotFoundException } from '@nestjs/common';

import { MovieGenre } from './movie-genre.type';
import { MovieGenreApi } from './movie-genre.api';

@Injectable()
export class MovieGenreService {
  constructor(private readonly genreApi: MovieGenreApi) {}

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
