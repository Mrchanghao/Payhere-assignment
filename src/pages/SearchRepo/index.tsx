import { useState } from "react";
import { useRecoilValue } from "recoil";
import { SearchState } from "../../atom/searchState";

export function SearchRepos() {
  const searchState = useRecoilValue(SearchState);
  // TODO
  // 1. pagination,
  // 2. react-query hook
  // response rendering
  return (
    <div>
      <h1>Search repo</h1>
    </div>
  );
}
