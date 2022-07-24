import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GenderModel {
  @Field(() => String)
  uuid: string;

  @Field(() => String)
  name: string;
}
