import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class RefreshAuthenticationDto {
  @Field(() => String)
  @IsString()
  refreshToken: string;
}
