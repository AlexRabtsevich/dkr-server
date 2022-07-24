export interface ResultsWithPagination<T> {
  page: number;
  totalPages: number;
  totalResults: number;
  results: T[];
}
