import { Field, ObjectType } from '@nestjs/graphql';

import { MovieProductionCompany } from '../movie.interface';

@ObjectType({ description: 'Movie production company' })
export class MovieProductionCompanyModel implements MovieProductionCompany {
  @Field(() => Number)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  logoPath: string;

  @Field(() => String, { nullable: true })
  originCountry: string;
}
