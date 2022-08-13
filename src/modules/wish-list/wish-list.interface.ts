import { ResultsWithPagination } from '@dkr/common/typings';

export interface IWishListMovie {
  uuid: string;
  externalId: number;
  createdAt: Date;
  isWatched: boolean;
}

export interface IWishList {
  uuid: string;
  userUuid: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IWishListDetails extends IWishList {
  movies: IWishListMovie[];
}

export abstract class AbstractWishListService {
  public abstract createWishList(userUuid: string, title: string): Promise<IWishList>;
  public abstract updateWishList(wishListUuid: string, userUuid: string, title: string): Promise<IWishList>;
  public abstract getWishList(wishListUuid: string, userUuid: string): Promise<IWishList>;
  public abstract getWishLists(userUuid: string, page: number): Promise<ResultsWithPagination<IWishList>>;
  public abstract getWishListMovies(wishListUuid: string, page: number): Promise<ResultsWithPagination<IWishListMovie>>;
  public abstract deleteWishList(wishListUuid: string, userUuid: string): Promise<void>;
  public abstract deleteMovieFromWishList(wishListUuid: string, userUuid: string, movieUuid: string): Promise<void>;
  public abstract addMovieToWishList(
    wishListUuid: string,
    userUuid: string,
    externalMovieId: number,
  ): Promise<IWishListMovie>;
}
