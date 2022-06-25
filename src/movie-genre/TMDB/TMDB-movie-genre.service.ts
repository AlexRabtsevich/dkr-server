import { Injectable, NotFoundException } from '@nestjs/common';

import { MovieGenre } from '../movie-genre.types';
import { MovieGenreService } from '../movie-genre.service';
import { TMDBMovieGenreApi } from './TMDB-movie-genre.api';

@Injectable()
export class TMDBMovieGenreService extends MovieGenreService {
  constructor(private readonly genreApi: TMDBMovieGenreApi) {
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
