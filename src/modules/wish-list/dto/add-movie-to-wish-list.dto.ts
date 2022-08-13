import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';

@InputType()
export class AddMovieToWishListDto {
  @Field(() => String)
  @IsString()
  watchlistUuid: string;

  @Field(() => Number)
  @IsNumber()
  externalMovieId: number;
}
