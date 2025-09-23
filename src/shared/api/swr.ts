import { api } from './api';

export const swrFetcher = (url: string) => api.get(url).then(res => res.data);

export function toMutationFn<Arg, Res, Key = string>(
  fn: (arg: Arg) => Promise<Res>
) {
  return async (_: Key, { arg }: { arg: Arg }) => fn(arg);
}
