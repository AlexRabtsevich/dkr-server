import { Field, ObjectType } from '@nestjs/graphql';

import { ResultsWithPagination } from '@dkr/common/typings';

import { WishListMoviesModel } from './wish-list-movies.model';

@ObjectType({ description: 'Wish list' })
export class WishListModel {
  @Field(() => String)
  uuid: string;

  @Field(() => String)
  userUuid: string;

  @Field(() => String)
  title: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => WishListMoviesModel)
  movies: ResultsWithPagination<WishListMoviesModel>;
}
