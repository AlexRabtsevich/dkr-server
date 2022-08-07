import { IMDDiscoverMoviesParams } from '@dkr/shared/movie-database';

import { ISearchMoviesParams } from './movie.interface';

const paramKeysProvider = new Map<keyof ISearchMoviesParams, keyof IMDDiscoverMoviesParams>([
  ['sortBy', 'sort_by'],
  ['genreIds', 'with_genres'],
  ['releaseDateGte', 'release_date.lte'],
  ['releaseDateLte', 'release_date.gte'],
  ['runtimeGte', 'with_runtime.gte'],
  ['runtimeLte', 'with_runtime.lte'],
  ['language', 'with_original_language'],
  ['year', 'year'],
  ['region', 'region'],
  ['page', 'page'],
]);

export const mapMovieParamsToDiscoverParams = (params: ISearchMoviesParams): IMDDiscoverMoviesParams => {
  return Object.entries(params).reduce<IMDDiscoverMoviesParams>((mappedParams, [key, value]) => {
    const mdKey = paramKeysProvider.get(key as keyof ISearchMoviesParams);

    if (mdKey) {
      return { ...mappedParams, [mdKey]: value };
    }

    return mappedParams;
  }, {});
};
