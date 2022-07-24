import { Provider } from '@nestjs/common/interfaces/modules/provider.interface';

import { MDMovieApi } from '@dkr/shared/movie-database';

import { MovieService } from './movie.service';
import { AbstractMovieService } from './movie.interface';

export const movieServiceProviders: Provider[] = [
  MDMovieApi,
  {
    provide: AbstractMovieService,
    useClass: MovieService,
  },
];
