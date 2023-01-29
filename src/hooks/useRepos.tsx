import {
  UseMutateFunction,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import { request } from "../utils/axiosSetting";
import { queryClient } from "../utils/queryClient";

async function searchRepos(queryStr: string) {
  if (queryStr.length) {
    // TODO
    // type 정의
    // @ts-ignore
    const { data } = await request.post(`/search/repositories?q=${queryStr}`);
    return data;
  } else {
    return;
  }
}
// any 를 Repo 타입으로 변경
export function useRepos(
  queryStr: string
): UseMutateFunction<void, unknown, any, unknown> {
  const queryClient = useQueryClient();
  const { mutate } = useMutation((queryStr: string) => searchRepos(queryStr), {
    onSuccess: () => {
      queryClient.invalidateQueries(["searchRepo"]);
    },
  });
  return mutate;
}
