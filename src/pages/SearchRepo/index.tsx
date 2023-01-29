import { useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { repoState } from "../../atom/repoState";
import { SearchState } from "../../atom/searchState";
import { useRepos } from "../../hooks/useRepos";
import { CustomRepo, Repo } from "../../types";
import { ListWrapper } from "./styles";

export function SearchRepos() {
  const repos = useRepos();
  const [storeRepo, setStoreRepo] = useRecoilState(repoState);

  // response rendering
  const registerRepo = (repo: Repo) => {
    const {
      name,
      owner: { login },
    } = repo;
    if (storeRepo.registeredRepo.length <= 4) {
      setStoreRepo({
        registeredRepo: [...storeRepo.registeredRepo, { name, owner: login }],
      });
    } else {
      // modal 구현
    }
  };
  if (repos.data.length === 0) return <h1>상단의 검색어를 입력하세요</h1>;
  return (
    <div>
      <h1>Searching results</h1>
      <ul>
        {repos.data.map((repo) => {
          return (
            <ListWrapper key={repo.id}>
              <h1>{repo.name}</h1>
              <button onClick={() => registerRepo(repo)}>등록</button>
            </ListWrapper>
          );
        })}
      </ul>
    </div>
  );
}
