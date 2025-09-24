import useSWRMutation from "swr/mutation";

import { toMutationFn } from "@shared/api/swr";

import { cancelBet } from "../services/api";

export function useCancelBet() {
	const fetcher = toMutationFn<string, void>(cancelBet);
  const mutation = useSWRMutation("/my-bet", fetcher);
	return mutation;
}
