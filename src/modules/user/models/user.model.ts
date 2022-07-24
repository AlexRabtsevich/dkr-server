import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';

import { GenderModel } from '@dkr/modules/gender';

import { UserStatus } from '../user.interface';

registerEnumType(UserStatus, { name: 'UserStatus' });

@ObjectType()
export class UserModel {
  @Field(() => ID)
  uuid: string;

  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => Date)
  birthDate: Date;

  @Field(() => String)
  email: string;

  @Field(() => GenderModel)
  gender: GenderModel;

  @Field(() => UserStatus)
  status: UserStatus;
}
