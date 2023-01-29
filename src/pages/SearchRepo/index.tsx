import { useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { repoState } from "../../atom/repoState";
import { SearchState } from "../../atom/searchState";
import { Button } from "../../components/Button";
import { RepoItem } from "../../components/RepoItem";
import { useRepos } from "../../hooks/useRepos";
import { CustomRepo, Repo } from "../../types";
import { ListWrapper, PageWrapper, Ul } from "./styles";

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
      // 같은 repo 면 등록 안 되는 로직 구현 해야함
      setStoreRepo({
        registeredRepo: [...storeRepo.registeredRepo, { name, owner: login }],
      });
    } else {
      // modal 구현
    }
  };
  if (repos.data.length === 0) return <h1>상단의 검색어를 입력하세요</h1>;
  return (
    <PageWrapper>
      <h1>Searching results</h1>
      <Ul>
        {repos.data.map((repo) => {
          return (
            <ListWrapper key={repo.id}>
              <RepoItem
                owner={repo.owner.login}
                name={repo.name}
                desc={repo.description}
                star={repo.stargazers_count}
                // license={repo.}
              />

              <Button onClick={() => registerRepo(repo)}>등록</Button>
            </ListWrapper>
          );
        })}
      </Ul>
    </PageWrapper>
  );
}
