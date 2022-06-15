import { Args, Query, Resolver } from '@nestjs/graphql';

import { Genre } from './models/movie-genre.model';
import { MovieGenreArgs } from './dto/movie-genre.args';
import { MovieGenreService } from './movie-genre.service';

@Resolver(() => Genre)
export class MovieGenreResolver {
  constructor(private readonly movieGenreService: MovieGenreService) {}

  @Query(() => Genre)
  async genre(@Args() { id }: MovieGenreArgs): Promise<Genre> {
    return await this.movieGenreService.findOneById(id);
  }

  @Query(() => [Genre])
  async genres(): Promise<Genre[]> {
    return await this.movieGenreService.findAll();
  }
}
