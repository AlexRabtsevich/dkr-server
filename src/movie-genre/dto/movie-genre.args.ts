import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class MovieGenreArgs {
  @Field(() => Int)
  id = 1;
}
