import { Field, ObjectType } from '@nestjs/graphql';

import { MovieProductionCountry } from '../movie.types';

@ObjectType({ description: 'Movie production country' })
export class MovieProductionCountryModel implements MovieProductionCountry {
  @Field(() => String)
  name: string;

  @Field(() => String)
  iso31661: string;
}
