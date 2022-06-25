import type { CamelCasedPropertiesDeep } from 'type-fest';

import {
  ITMDBMovie,
  ITMDBMovieDetails,
  ITMDBMovieProductionCompany,
  ITMDBMovieProductionCountry,
  ITMDBMoveSpokenLanguage,
} from './TMDB/TMDB-movie.types';

export type Movie = CamelCasedPropertiesDeep<ITMDBMovie>;

export type MovieDetails = CamelCasedPropertiesDeep<ITMDBMovieDetails>;

export type MovieProductionCompany = CamelCasedPropertiesDeep<ITMDBMovieProductionCompany>;

export type MovieProductionCountry = CamelCasedPropertiesDeep<ITMDBMovieProductionCountry>;

export type MovieSpokenLanguage = CamelCasedPropertiesDeep<ITMDBMoveSpokenLanguage>;
