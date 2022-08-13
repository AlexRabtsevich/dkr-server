import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SuccessModel {
  @Field(() => Boolean)
  success: boolean;
}
