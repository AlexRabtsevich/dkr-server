import { Field, ObjectType } from '@nestjs/graphql';

import { IMovieLanguageFilter } from '../movie-filters.interface';

@ObjectType({ description: 'Movie`s language filters' })
export class MovieSearchLanguageFilterModel implements IMovieLanguageFilter {
  @Field(() => String)
  name: string;

  @Field(() => String)
  handle: string;
}
