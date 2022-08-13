import { Provider } from '@nestjs/common/interfaces/modules/provider.interface';

import { AbstractWishListService } from './wish-list.interface';
import { WishListService } from './wish-list.service';

export const wishListProviders: Provider[] = [
  {
    provide: AbstractWishListService,
    useClass: WishListService,
  },
];
