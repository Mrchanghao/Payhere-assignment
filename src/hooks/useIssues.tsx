import { useEffect, useState } from "react";
import { request } from "../utils/axiosSetting";
import { queryClient } from "../utils/queryClient";
import { Issues } from "../types";
import { repoInfoState } from "../atom/repoState";
import { useRecoilValue } from "recoil";

// 해당 repo의 issue들을 볼 수 있게

// url
// https://api.github.com/repos/OWNER/REPO/issues

async function getIssues(owner: string, repo: string, page: number) {
  const data = await request.get<Issues>(
    `/repos/${owner}/${repo}/issues?per_page=20&page=${page}`
  );

  return data;
}

export function useIssues(owner: string, name: string, page = 1) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Issues>([]);

  const getData = async () => {
    setLoading(true);
    const items = await getIssues(owner, name, page);

    setData([...items]);
    setLoading(false);
  };

  useEffect(() => {
    if (owner.length && name.length) {
      getData();
    }
  }, [owner, name]);

  return {
    data,
    loading,
  };
}
