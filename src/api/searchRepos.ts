import { request } from "../utils/axiosSetting";
import { SearchState } from "../atom/searchState";
import {  useRecoilValue } from "recoil";
import { Repo, Repos, State } from "../types";



export async function searchRepos(queryStr: string, page = 1): Promise<Repos | null> {
  if (queryStr.length) {
    // TODO
    // type 정의
    // @ts-ignore
    const data = await request.get<Repos>(
      `/search/repositories?q=${queryStr}&per_page=10&page=${page}`
    );
    return data;
  } else {
    return null;
  }
}

export function getQueryString() {
  const queryStr = useRecoilValue(SearchState);
  return queryStr;
}



