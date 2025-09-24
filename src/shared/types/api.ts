export interface ApiPaginateResponse<T = any> {
  data: T[];
  total: number;
  page: number | null;
  limit: number | null;
}

export interface Parameters {
	id?: string;
	status?: number;
	page: number;
	limit: number;
};
