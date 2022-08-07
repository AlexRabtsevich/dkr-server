import { Module } from '@nestjs/common';

import { movieFiltersServiceProviders } from './movie-filters.providers';
import { MovieFiltersResolver } from './movie-filters.resolver';

@Module({
  providers: [...movieFiltersServiceProviders, MovieFiltersResolver],
})
export class MovieFiltersModule {}
