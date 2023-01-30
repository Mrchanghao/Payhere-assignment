import {
  UseMutateFunction,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import { request } from "../utils/axiosSetting";
import { queryClient } from "../utils/queryClient";
import { SearchState } from "../atom/searchState";
import { useRecoilState, useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import { Repo, Repos } from "../types";



async function searchRepos(queryStr: string, page = 1): Promise<Repos | null> {
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



export function useRepos(page: number) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Repo[]>([]);
  const searchStr = getQueryString();
  const getRepo = async () => {
    setLoading(true);
    const {items} = (await searchRepos(searchStr, page)) as Repos ;
    setData([...items]);
    setLoading(false);
  };
  useEffect(() => {
    if (searchStr.length) {
      getRepo();
    }
  }, [searchStr]);
  return {
    data,
    loading,
  };
}
