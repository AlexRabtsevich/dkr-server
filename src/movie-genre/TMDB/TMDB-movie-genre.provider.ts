import { Provider } from '@nestjs/common/interfaces/modules/provider.interface';

import { TMDBMovieGenreApi } from './TMDB-movie-genre.api';
import { MovieGenreService } from '../movie-genre.service';
import * as test from './TMDB-movie-genre.service';

export const TMDBServiceProviders: Provider[] = [
  TMDBMovieGenreApi,
  {
    provide: MovieGenreService,
    useClass: test.TMDBMovieGenreService,
  },
];
