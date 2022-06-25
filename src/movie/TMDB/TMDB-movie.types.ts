import { AnyObject, IGenre } from '@dkr/common/typings';

interface ITMDBBaseMovie {
  poster_path: string | null;
  adult: boolean;
  overview: string | null;
  release_date: string;
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface ITMDBMovie extends ITMDBBaseMovie {
  genres_id: number[];
}

export interface ITMDBMovieDetails extends ITMDBBaseMovie {
  belongs_to_collection: null | AnyObject;
  budget: number;
  genres: IGenre[];
  homepage: string | null;
  imdb_id: string | null;
  production_companies: ITMDBMovieProductionCompany[];
  production_countries: ITMDBMovieProductionCountry[];
  revenue: number;
  runtime: number | null;
  spoken_languages: ITMDBMoveSpokenLanguage[];
  status: MovieStatus;
  tagline: string | null;
}

export interface ITMDBMovieProductionCompany {
  name: string;
  id: number;
  logo_path: string | null;
  origin_country: string | null;
}

export interface ITMDBMovieProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface ITMDBMoveSpokenLanguage {
  iso_639_1: string;
  name: string;
}

export enum MovieStatus {
  Rumored = 'Rumored',
  Planned = 'Planned',
  InProduction = 'InProduction',
  PostProduction = 'PostProduction',
  Released = 'Released',
  Canceled = 'Canceled',
}
