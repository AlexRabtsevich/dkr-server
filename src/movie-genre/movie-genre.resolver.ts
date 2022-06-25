import { Args, Query, Resolver } from '@nestjs/graphql';

import { MovieGenreModel } from './models/movie-genre.model';
import { MovieGenreArgs } from './dto/movie-genre.args';
import { MovieGenreService } from './movie-genre.service';

@Resolver(() => MovieGenreModel)
export class MovieGenreResolver {
  constructor(private readonly genreService: MovieGenreService) {}

  @Query(() => MovieGenreModel)
  async movieGenre(@Args() { id }: MovieGenreArgs): Promise<MovieGenreModel> {
    return await this.genreService.findOneById(id);
  }

  @Query(() => [MovieGenreModel])
  async movieGenres(): Promise<MovieGenreModel[]> {
    return await this.genreService.findAll();
  }
}
