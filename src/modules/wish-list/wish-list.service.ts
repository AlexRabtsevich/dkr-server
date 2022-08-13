import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ResultsWithPagination } from '@dkr/common/typings';
import { UserEntity } from '@dkr/modules/user';

import { WISH_LIST_MOVIES_PER_PAGE, WISH_LISTS_PER_PAGE } from './wish-list.constants';
import { WishListEntity, WishListMovieEntity } from './entities';
import { AbstractWishListService, IWishListMovie, IWishListDetails, IWishList } from './wish-list.interface';

@Injectable()
export class WishListService extends AbstractWishListService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @InjectRepository(WishListEntity)
    private wishListRepository: Repository<WishListEntity>,
    @InjectRepository(WishListMovieEntity)
    private wishListMovieRepository: Repository<WishListMovieEntity>,
  ) {
    super();
  }

  public async createWishList(userUuid: string, title: string): Promise<IWishList> {
    const wishList = this.wishListRepository.create({ userUuid, title });
    await this.wishListRepository.save(wishList);

    return wishList;
  }

  public async updateWishList(wishListUuid: string, userUuid: string, title: string): Promise<IWishList> {
    const wishList = await this.wishListRepository.findOneBy({ userUuid, uuid: wishListUuid });

    if (!wishList) {
      throw new NotFoundException('Watchlist not found');
    }

    wishList.title = title;
    await this.wishListRepository.save(wishList);

    return wishList;
  }

  public async getWishList(wishListUuid: string, userUuid: string): Promise<IWishListDetails> {
    const wishList = await this.wishListRepository.findOneBy({ userUuid, uuid: wishListUuid });

    if (!wishList) {
      throw new NotFoundException('Watchlist not found');
    }

    return wishList;
  }

  public async getWishLists(userUuid: string, page: number): Promise<ResultsWithPagination<IWishList>> {
    const [results, totalResults] = await this.wishListRepository.findAndCount({ where: { userUuid } });

    return { results, totalResults, page, totalPages: Math.ceil(totalResults / WISH_LISTS_PER_PAGE) };
  }

  public async getWishListMovies(wishListUuid: string, page: number): Promise<ResultsWithPagination<IWishListMovie>> {
    const [results, totalResults] = await this.wishListMovieRepository.findAndCount({
      where: { wishListUuid },
      take: WISH_LIST_MOVIES_PER_PAGE,
      skip: (page - 1) * WISH_LISTS_PER_PAGE,
    });

    return { results, totalResults, page, totalPages: Math.ceil(totalResults / WISH_LISTS_PER_PAGE) };
  }

  public async deleteWishList(wishListUuid: string, userUuid: string): Promise<void> {
    const wishList = await this.wishListRepository.findOneBy({ uuid: wishListUuid, userUuid });

    if (!wishList) {
      throw new NotFoundException('Wish list not found');
    }

    await this.wishListRepository.remove(wishList);
  }

  public async deleteMovieFromWishList(wishListUuid: string, userUuid: string, movieUuid: string): Promise<void> {
    const wishList = await this.wishListRepository
      .createQueryBuilder('wishList')
      .where('wishList.uuid = :wishListUuid', { wishListUuid })
      .leftJoin('wishList.user', 'user')
      .where('user.uuid = :userUuid', { userUuid })
      .leftJoinAndSelect('wishList.movies', 'movies')
      .where('movies.uuid = :movieUuid', { movieUuid })
      .getOne();

    const [movie] = wishList.movies;

    if (!movie) {
      throw new NotFoundException('Wish list`s movie not found');
    }

    await this.wishListMovieRepository.remove(movie);
  }

  public async addMovieToWishList(
    wishListUuid: string,
    userUuid: string,
    externalMovieId: number,
  ): Promise<IWishListMovie> {
    const wishList = await this.wishListRepository.findOneBy({ userUuid, uuid: wishListUuid });

    if (!wishList) {
      throw new NotFoundException('Watchlist not found');
    }

    const movie = this.wishListMovieRepository.create({ externalId: externalMovieId, wishList: wishList });
    await this.wishListMovieRepository.save(movie);

    return movie;
  }
}
