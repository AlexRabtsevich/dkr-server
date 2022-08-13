import { ObjectType } from '@nestjs/graphql';

import { Paginated } from '@dkr/gql';

import { WishListModel } from './wish-list.model';

@ObjectType({ description: 'Wish lists with pagination info' })
export class WishListsResultsModelWithPagination extends Paginated(WishListModel) {}
