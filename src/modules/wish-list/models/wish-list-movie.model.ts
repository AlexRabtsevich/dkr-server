import { Field, ObjectType } from '@nestjs/graphql';

import { MovieDetailsModel } from '@dkr/modules/movie/models';

@ObjectType({ description: 'Wish list`s movie' })
export class WishListMovieModel extends MovieDetailsModel {
  @Field(() => String)
  uuid: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Boolean)
  isWatched: boolean;
}
