import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AuthenticationModel {
  @Field(() => String)
  accessToken: string;

  @Field(() => String)
  refreshToken: string;
}
