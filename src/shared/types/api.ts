export interface ApiPaginateResponse<T = any> {
  data: T[];
  total: number;
  page: number | null;
  limit: number | null;
}
