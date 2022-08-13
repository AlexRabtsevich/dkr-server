import { ArgsType, Field } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';

@ArgsType()
export class WishListsArgs {
  @IsNumber()
  @Field(() => Number)
  page: number;
}
