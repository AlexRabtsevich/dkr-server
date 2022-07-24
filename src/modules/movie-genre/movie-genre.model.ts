import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Genre' })
export class MovieGenreModel {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  name: string;
}
