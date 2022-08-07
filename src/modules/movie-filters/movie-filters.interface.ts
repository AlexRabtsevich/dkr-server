export interface IMovieLanguageFilter {
  name: string;
  handle: string;
}

export interface IMovieCountryFilter {
  name: string;
  handle: string;
}

export abstract class AbstractMovieFiltersService {
  public abstract getMovieLanguageFilters(): Promise<IMovieLanguageFilter[]>;
  public abstract getMovieCountryFilters(): Promise<IMovieCountryFilter[]>;
}
