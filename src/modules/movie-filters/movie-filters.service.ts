import { Injectable } from '@nestjs/common';

import { MDConfigurationApi } from '@dkr/shared/movie-database';

import { IMovieLanguageFilter, IMovieCountryFilter, AbstractMovieFiltersService } from './movie-filters.interface';
import { mapMDLanguagesToLanguageFilters, mapMDCountriesToCountryFilters } from './movie-filters.mapper';

@Injectable()
export class MovieFiltersService extends AbstractMovieFiltersService {
  constructor(private readonly configurationApi: MDConfigurationApi) {
    super();
  }

  public async getMovieCountryFilters(): Promise<IMovieCountryFilter[]> {
    const countries = await this.configurationApi.getCountries();

    return mapMDCountriesToCountryFilters(countries);
  }

  public async getMovieLanguageFilters(): Promise<IMovieLanguageFilter[]> {
    const languages = await this.configurationApi.getLanguages();

    return mapMDLanguagesToLanguageFilters(languages);
  }
}
