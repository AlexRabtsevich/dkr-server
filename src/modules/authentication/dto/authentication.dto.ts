import { Field, InputType } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';

@InputType()
export class AuthenticationDto {
  @Field(() => String)
  @IsEmail()
  email: string;

  @Field(() => String)
  password: string;
}
