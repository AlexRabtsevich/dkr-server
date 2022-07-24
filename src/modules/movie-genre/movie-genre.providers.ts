import { Provider } from '@nestjs/common/interfaces/modules/provider.interface';

import { MDMovieGenreApi } from '@dkr/shared/movie-database';

import { MovieGenreService } from './movie-genre.service';
import { AbstractMovieGenreService } from './movie-genre.interface';

export const movieGenreServiceProviders: Provider[] = [
  MDMovieGenreApi,
  {
    provide: AbstractMovieGenreService,
    useClass: MovieGenreService,
  },
];
