import { ArgsType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@ArgsType()
export class DeleteWishListArgs {
  @Field(() => String)
  @IsString()
  watchlistUuid: string;
}
