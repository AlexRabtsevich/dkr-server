import { Args, Query, Resolver } from '@nestjs/graphql';

import { Genre } from './models/genre.model';
import { GenreArgs } from './dto/genre.args';
import { GenreService } from './genre.service';

@Resolver(() => Genre)
export class GenreResolver {
  constructor(private readonly movieGenreService: GenreService) {}

  @Query(() => Genre)
  async movieGenre(@Args() { id }: GenreArgs): Promise<Genre> {
    return await this.movieGenreService.findOneById(id);
  }

  @Query(() => [Genre])
  async movieGenres(): Promise<Genre[]> {
    return await this.movieGenreService.findAll();
  }
}
