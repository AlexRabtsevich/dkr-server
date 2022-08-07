import { Field, ObjectType } from '@nestjs/graphql';

import { IMovieLanguageFilter } from '../movie-filters.interface';

@ObjectType({ description: 'Movie`s country filters' })
export class MovieSearchCountryFilterModel implements IMovieLanguageFilter {
  @Field(() => String)
  name: string;

  @Field(() => String)
  handle: string;
}
