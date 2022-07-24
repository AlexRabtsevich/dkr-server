import { ArgsType, Field, Int } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';

@ArgsType()
export class MovieDetailsArgs {
  @IsNumber()
  @Field(() => Int)
  id: number;
}
