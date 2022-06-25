import { Provider } from '@nestjs/common/interfaces/modules/provider.interface';

import { TMDBMovieApi } from './TMDB-movie.api';
import { MovieService } from '../movie.service';
import { TMDBMovieService } from './TMDB-movie.service';

export const TMDBMovieServiceProviders: Provider[] = [
  TMDBMovieApi,
  {
    provide: MovieService,
    useClass: TMDBMovieService,
  },
];
