import { AnyObject } from '@dkr/common/typings';

import { IMDLanguage } from './common';
import { IMDMovieGenre } from './movie-genre';

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

export interface IMDMovie extends ITMDBBaseMovie {
  genres_id: number[];
}

export interface IMDMovieDetails extends ITMDBBaseMovie {
  belongs_to_collection: null | AnyObject;
  budget: number;
  genres: IMDMovieGenre[];
  homepage: string | null;
  imdb_id: string | null;
  production_companies: IMDMovieProductionCompany[];
  production_countries: IMDMovieProductionCountry[];
  revenue: number;
  runtime: number | null;
  spoken_languages: IMDMoveSpokenLanguage[];
  status: string;
  tagline: string | null;
}

export interface IMDMovieProductionCompany {
  name: string;
  id: number;
  logo_path: string | null;
  origin_country: string | null;
}

export interface IMDMovieProductionCountry {
  iso_3166_1: string;
  name: string;
}

export type IMDMoveSpokenLanguage = Omit<IMDLanguage, 'english_name'>;

export enum MovieSorting {
  PopularityAsc = 'popularity.asc',
  PopularityDesc = 'popularity.desc',
  ReleaseDateAsc = 'popularity.asc',
  ReleaseDateDesc = 'popularity.desc',
  RevenueAsc = 'revenue.asc',
  RevenueDesc = 'revenue.desc',
  OriginalTitleAsc = 'original_title.asc',
  OriginalTitleDesc = 'original_title.desc',
  VoteAverageAsc = 'vote_average.asc',
  VoteAverageDesc = 'vote_average.desc',
}

export interface IMDDiscoverMoviesParams {
  with_original_language?: string;
  year?: number;
  'release_date.gte'?: string;
  'release_date.lte'?: string;
  'with_runtime.gte'?: string;
  'with_runtime.lte'?: string;
  with_genres?: string;
  region?: string;
  sort_by?: MovieSorting;
  page?: number;
}
