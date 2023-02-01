import { useEffect, useState } from "react";
import { request } from "../utils/axiosSetting";
import { Issues, State } from "../types";


// 해당 repo의 issue들을 볼 수 있게

// url
// https://api.github.com/repos/OWNER/REPO/issues




async function getIssues(owner: string, repo: string, state: State, page: number) {
  // state  --> open closed all 
  const data = await request.get<Issues>(
    `/repos/${owner}/${repo}/issues?per_page=20&page=${page}&state=${state}`
  );

  return data;
}

export function useIssues(owner: string, name: string, state: State = 'open', page = 1) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Issues>([]);

  const getData = async (owner: string, name: string, state: State, page: number) => {
    setLoading(true);
    const items = await getIssues(owner, name, state, page);

    setData([...items]);
    setLoading(false);
  };

  useEffect(() => {
    if (owner.length && name.length) {
      getData(owner, name, state, page);
    }
  }, [owner, name, state, page]);

  return {
    data,
    loading,
  };
}
