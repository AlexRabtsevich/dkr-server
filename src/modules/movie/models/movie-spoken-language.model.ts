import { Field, ObjectType } from '@nestjs/graphql';

import { MovieSpokenLanguage } from '../movie.interface';

@ObjectType({ description: 'Movie spoken language' })
export class MovieSpokenLanguageModel implements MovieSpokenLanguage {
  @Field(() => String)
  name: string;

  @Field(() => String)
  iso6391: string;
}
