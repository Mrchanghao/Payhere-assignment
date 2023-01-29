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

async function getIssues(owner: string, repo: string) {
  const { data } = (await request.get(`/repos/${owner}/${repo}/issues`)) as any;

  return data;
}

export function useTreatments(owner: string, repo: string): any[] {
  const fallback: any[] = [];
  const { data = fallback } = useQuery(["repo", "issue"], () =>
    getIssues(owner, repo)
  );
  return data;
}
