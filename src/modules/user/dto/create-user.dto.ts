import { Field, InputType } from '@nestjs/graphql';
import { MaxLength, IsDate, IsEmail } from 'class-validator';

import { UserEmailUnique } from '@dkr/modules/user/decorators/unique-email.decorator';

import { MAX_USER_NAME_LENGTH } from '../user.constants';

@InputType()
export class CreateUserDto {
  @Field(() => String)
  @MaxLength(MAX_USER_NAME_LENGTH)
  firstName: string;

  @Field(() => String)
  @MaxLength(MAX_USER_NAME_LENGTH)
  lastName: string;

  @Field(() => Date)
  @IsDate()
  birthDate: Date;

  @Field(() => String)
  @IsEmail()
  @UserEmailUnique()
  email: string;

  @Field(() => String)
  genderUuid: string;

  @Field(() => String)
  password: string;
}
