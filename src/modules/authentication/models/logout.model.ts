import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LogoutModel {
  @Field(() => Boolean)
  success: boolean;
}
