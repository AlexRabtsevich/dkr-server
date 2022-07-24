import { Field, InputType } from '@nestjs/graphql';
import { MaxLength, IsDate, IsOptional } from 'class-validator';

import { MAX_USER_NAME_LENGTH } from '../user.constants';

@InputType()
export class UpdateUserDto {
  @Field(() => String, { nullable: true })
  @MaxLength(MAX_USER_NAME_LENGTH)
  firstName?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @MaxLength(MAX_USER_NAME_LENGTH)
  lastName?: string;

  @Field(() => Date, { nullable: true })
  @IsDate()
  @IsOptional()
  birthDate?: Date;

  @Field(() => String, { nullable: true })
  @IsOptional()
  genderUuid?: string;
}
