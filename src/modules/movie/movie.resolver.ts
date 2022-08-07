import { Args, Query, Resolver } from '@nestjs/graphql';

import { PaginationArgs } from '@dkr/gql/dto';

import { AbstractMovieService } from './movie.interface';
import { MovieDetailsArgs, SearchMoviesArgs } from './dto';
import { MovieDetailsModel, MoviesResultsModelWithPagination } from './models';

@Resolver()
export class MovieResolver {
  constructor(private movieService: AbstractMovieService) {}

  @Query(() => MovieDetailsModel)
  async movieDetails(@Args() { id }: MovieDetailsArgs): Promise<MovieDetailsModel> {
    return await this.movieService.getMovieById(id);
  }

  @Query(() => MovieDetailsModel)
  async latestMovie(): Promise<MovieDetailsModel> {
    return await this.movieService.getLatestMovie();
  }

  @Query(() => MoviesResultsModelWithPagination)
  async popularMovies(@Args() { page }: PaginationArgs): Promise<MoviesResultsModelWithPagination> {
    return await this.movieService.getPopularMovies(page);
  }

  @Query(() => MoviesResultsModelWithPagination)
  async upcomingMovies(@Args() { page }: PaginationArgs): Promise<MoviesResultsModelWithPagination> {
    return await this.movieService.getUpcomingMovies(page);
  }

  @Query(() => MoviesResultsModelWithPagination)
  async topRatedMovies(@Args() { page }: PaginationArgs): Promise<MoviesResultsModelWithPagination> {
    return await this.movieService.getTopRatedMovies(page);
  }

  @Query(() => MoviesResultsModelWithPagination)
  async searchMovies(@Args() searchMoviesArgs: SearchMoviesArgs): Promise<MoviesResultsModelWithPagination> {
    return await this.movieService.searchMovies(searchMoviesArgs);
  }
}
