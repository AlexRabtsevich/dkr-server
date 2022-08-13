import { ArgsType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@ArgsType()
export class DeleteWishListMovieArgs {
  @Field(() => String)
  @IsString()
  watchlistUuid: string;

  @Field(() => String)
  @IsString()
  watchlistMovieUuid: string;
}
