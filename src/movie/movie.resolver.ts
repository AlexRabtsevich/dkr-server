import { Args, Query, Resolver } from '@nestjs/graphql';

import { ResultsWithPagination } from '@dkr/common/typings';
import { PaginationArgs } from '@dkr/common/dto/pagination.args';

import { MovieService } from './movie.service';
import { Movie, MovieDetails } from './movie.types';
import { MovieDetailsArgs } from './dto/movie-details.args';
import { MovieDetailsModel } from './models/movie-details.model';
import { MoviesResultsModelWithPagination } from './models/movie-with-pagination.model';

@Resolver()
export class MovieResolver {
  constructor(private movieService: MovieService) {}

  @Query(() => MovieDetailsModel)
  async movieDetails(@Args() { id }: MovieDetailsArgs): Promise<MovieDetails> {
    return await this.movieService.getMovieById(id);
  }

  @Query(() => MovieDetailsModel)
  async latestMovie(): Promise<MovieDetails> {
    return await this.movieService.getLatestMovie();
  }

  @Query(() => MoviesResultsModelWithPagination)
  async popularMovies(@Args() { page }: PaginationArgs): Promise<ResultsWithPagination<Movie>> {
    return await this.movieService.getPopularMovies(page);
  }

  @Query(() => MoviesResultsModelWithPagination)
  async upcomingMovies(@Args() { page }: PaginationArgs): Promise<ResultsWithPagination<Movie>> {
    return await this.movieService.getUpcomingMovies(page);
  }

  @Query(() => MoviesResultsModelWithPagination)
  async topRatedMovies(@Args() { page }: PaginationArgs): Promise<ResultsWithPagination<Movie>> {
    return await this.movieService.getTopRatedMovies(page);
  }
}
