import { Provider } from '@nestjs/common/interfaces/modules/provider.interface';

import { MDConfigurationApi } from '@dkr/shared/movie-database';

import { MovieFiltersService } from './movie-filters.service';
import { AbstractMovieFiltersService } from './movie-filters.interface';

export const movieFiltersServiceProviders: Provider[] = [
  MDConfigurationApi,
  {
    provide: AbstractMovieFiltersService,
    useClass: MovieFiltersService,
  },
];
