import { ObjectType } from '@nestjs/graphql';

import { Paginated } from '@dkr/gql';

import { WishListMovieModel } from './wish-list-movie.model';

@ObjectType({ description: 'Wish list`s movies' })
export class WishListMoviesModel extends Paginated(WishListMovieModel) {}
