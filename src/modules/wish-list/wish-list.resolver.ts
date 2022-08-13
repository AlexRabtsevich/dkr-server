import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { JwtGuard, JwtPayload } from '@dkr/modules/authentication';
import { SuccessModel, getSuccessResponse, PaginationArgs } from '@dkr/gql';
import { ResultsWithPagination } from '@dkr/common/typings';
import { AbstractMovieService } from '@dkr/modules/movie';

import { AbstractWishListService, IWishList, IWishListMovie } from './wish-list.interface';
import { WishListModel, WishListMovieModel, WishListsResultsModelWithPagination, WishListMoviesModel } from './models';
import {
  AddMovieToWishListDto,
  CreateWishListDto,
  DeleteWishListArgs,
  DeleteWishListMovieArgs,
  UpdateWishListDto,
  WishListArgs,
  WishListsArgs,
} from './dto';

@UseGuards(JwtGuard)
@Resolver(() => WishListModel)
export class WishListResolver {
  constructor(private readonly wishListService: AbstractWishListService, private movieService: AbstractMovieService) {}

  @Query(() => WishListModel)
  public async wishList(
    @Args() { wishListUuid }: WishListArgs,
    @JwtPayload('userUuid') userUuid: string,
  ): Promise<IWishList> {
    return await this.wishListService.getWishList(wishListUuid, userUuid);
  }

  @Query(() => WishListsResultsModelWithPagination)
  public async wishLists(
    @Args() { page }: WishListsArgs,
    @JwtPayload('userUuid') userUuid: string,
  ): Promise<ResultsWithPagination<IWishList>> {
    return await this.wishListService.getWishLists(userUuid, page);
  }

  @Mutation(() => WishListModel)
  public async createWishList(
    @Args('wishListData') { title }: CreateWishListDto,
    @JwtPayload('userUuid') userUuid: string,
  ): Promise<IWishList> {
    return await this.wishListService.createWishList(userUuid, title);
  }

  @Mutation(() => WishListModel)
  public async updateWishList(
    @Args('wishListUpdateData') { title, wishListUuid }: UpdateWishListDto,
    @JwtPayload('userUuid') userUuid: string,
  ): Promise<IWishList> {
    return await this.wishListService.updateWishList(wishListUuid, userUuid, title);
  }

  @Mutation(() => SuccessModel)
  public async deleteWishList(
    @Args() { watchlistUuid }: DeleteWishListArgs,
    @JwtPayload('userUuid') userUuid: string,
  ): Promise<SuccessModel> {
    await this.wishListService.deleteWishList(watchlistUuid, userUuid);

    return getSuccessResponse();
  }

  @Mutation(() => SuccessModel)
  public async deleteMovieFromWishList(
    @Args() { watchlistUuid, watchlistMovieUuid }: DeleteWishListMovieArgs,
    @JwtPayload('userUuid') userUuid: string,
  ): Promise<SuccessModel> {
    await this.wishListService.deleteMovieFromWishList(watchlistUuid, userUuid, watchlistMovieUuid);

    return getSuccessResponse();
  }

  @Mutation(() => WishListMovieModel)
  public async addMovieToWishList(
    @Args('addMovieToWatchlistData') { watchlistUuid, externalMovieId }: AddMovieToWishListDto,
    @JwtPayload('userUuid') userUuid: string,
  ): Promise<IWishListMovie> {
    return await this.wishListService.addMovieToWishList(watchlistUuid, userUuid, externalMovieId);
  }

  @ResolveField('movies', () => WishListMoviesModel)
  public async getMovies(
    @Parent() { uuid }: WishListModel,
    @Args() { page }: PaginationArgs,
  ): Promise<WishListMoviesModel> {
    const { results, ...wishListMovies } = await this.wishListService.getWishListMovies(uuid, page);
    const movies = await Promise.all(
      results.map(({ externalId, ...wishListMovie }) =>
        this.movieService.getMovieById(externalId).then((movie) => ({ ...movie, ...wishListMovie })),
      ),
    );

    return { ...wishListMovies, results: movies };
  }
}
