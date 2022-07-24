import { Args, Query, Resolver } from '@nestjs/graphql';

import { AbstractMovieGenreService } from './movie-genre.interface';
import { MovieGenreModel } from './movie-genre.model';
import { MovieGenreArgs } from './movie-genre.args';

@Resolver(() => MovieGenreModel)
export class MovieGenreResolver {
  constructor(private readonly genreService: AbstractMovieGenreService) {}

  @Query(() => MovieGenreModel)
  async movieGenre(@Args() { id }: MovieGenreArgs): Promise<MovieGenreModel> {
    return await this.genreService.findOneById(id);
  }

  @Query(() => [MovieGenreModel])
  async movieGenres(): Promise<MovieGenreModel[]> {
    return await this.genreService.findAll();
  }
}
