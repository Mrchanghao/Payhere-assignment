import { useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { SearchState } from "../../atom/searchState";
import { useRepos } from "../../hooks/useRepos";
import { ListWrapper } from "./styles";

export function SearchRepos() {
  const repos = useRepos();

  // TODO
  // 1. pagination,
  // 2. react-query hook
  // response rendering

  if (repos.data.length === 0) return null;
  return (
    <div>
      <h1>Searching results</h1>
      <ul>
        {repos.data.map((repo) => {
          return (
            <ListWrapper key={repo.id}>
              <h1>{repo.name}</h1>
              <button>등록</button>
            </ListWrapper>
          );
        })}
      </ul>
    </div>
  );
}
