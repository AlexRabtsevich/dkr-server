import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class UserArgs {
  @Field(() => String)
  uuid = 1;
}
