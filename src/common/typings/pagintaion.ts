export interface ITMDBDataWithPagination<T> {
  page: number;
  total_pages: number;
  total_results: number;
  results: T[];
}

export interface ResultsWithPagination<T> {
  page: number;
  totalPages: number;
  totalResults: number;
  results: T[];
}
