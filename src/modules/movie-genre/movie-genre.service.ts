import { Injectable, NotFoundException } from '@nestjs/common';

import { MDMovieGenreApi } from '@dkr/shared/movie-database';

import { MovieGenre, AbstractMovieGenreService } from './movie-genre.interface';

@Injectable()
export class MovieGenreService extends AbstractMovieGenreService {
  constructor(private readonly genreApi: MDMovieGenreApi) {
    super();
  }

  public async findAll(): Promise<MovieGenre[]> {
    return await this.genreApi.getMovieGenres();
  }

  public async findOneById(genreId): Promise<MovieGenre> {
    const movieGenres = await this.genreApi.getMovieGenres();
    const genre = movieGenres.find(({ id }) => genreId === id);

    if (!genre) {
      throw new NotFoundException();
    }

    return genre;
  }
}
