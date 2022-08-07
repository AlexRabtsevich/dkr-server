import { IMDLanguage, IMDCountry } from '@dkr/shared/movie-database';

import { IMovieLanguageFilter, IMovieCountryFilter } from './movie-filters.interface';

export const mapMDLanguagesToLanguageFilters = (mdLanguages: IMDLanguage[]): IMovieLanguageFilter[] => {
  return mdLanguages.map(({ iso_639_1, english_name }) => ({ name: english_name, handle: iso_639_1 }));
};

export const mapMDCountriesToCountryFilters = (mdLanguages: IMDCountry[]): IMovieCountryFilter[] => {
  return mdLanguages.map(({ iso_3166_1, english_name }) => ({ name: english_name, handle: iso_3166_1 }));
};
