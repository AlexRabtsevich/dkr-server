import { ArgsType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@ArgsType()
export class WishListArgs {
  @IsString()
  @Field(() => String)
  wishListUuid: string;
}
