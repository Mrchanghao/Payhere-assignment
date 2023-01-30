import {
  UseMutateFunction,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import { request } from "../utils/axiosSetting";
import { queryClient } from "../utils/queryClient";

// 해당 repo의 issue들을 볼 수 있게

// url
// https://api.github.com/repos/OWNER/REPO/issues

async function getIssues(owner: string, repo: string, page: number) {
  const { data } = (await request.get(`/repos/${owner}/${repo}/issues?per_page=20&page=${page}`)) as any;

  return data;
}

export function useIssues(owner: string, repo: string, page: number): any[] {
  const fallback: any[] = [];
  const { data = fallback } = useQuery(["repo", "issue"], () =>
    getIssues(owner, repo, page)
  );
  return data;
}
