import { Query, Resolver } from '@nestjs/graphql';

import { AbstractMovieFiltersService } from './movie-filters.interface';
import { MovieSearchLanguageFilterModel, MovieSearchCountryFilterModel } from './models';

@Resolver()
export class MovieFiltersResolver {
  constructor(private readonly configurationService: AbstractMovieFiltersService) {}

  @Query(() => [MovieSearchLanguageFilterModel])
  async movieLanguageFilters(): Promise<MovieSearchLanguageFilterModel[]> {
    return await this.configurationService.getMovieLanguageFilters();
  }

  @Query(() => [MovieSearchCountryFilterModel])
  async movieCountryFilters(): Promise<MovieSearchCountryFilterModel[]> {
    return await this.configurationService.getMovieCountryFilters();
  }
}
