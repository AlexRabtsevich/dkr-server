import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'genre ' })
export class Genre {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  name: string;
}
