import { ArgsType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@ArgsType()
export class GenderArgs {
  @IsString()
  @Field(() => String)
  uuid: string;
}
