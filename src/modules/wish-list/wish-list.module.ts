import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserEntity } from '@dkr/modules/user';
import { MovieModule } from '@dkr/modules/movie';

import { WishListResolver } from './wish-list.resolver';
import { WishListEntity, WishListMovieEntity } from './entities';
import { wishListProviders } from './wish-list.providers';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, WishListEntity, WishListMovieEntity]), MovieModule],
  providers: [...wishListProviders, WishListResolver],
})
export class WishListModule {}
