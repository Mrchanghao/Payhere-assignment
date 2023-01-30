import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useRecoilState } from "recoil";
import { repoInfoState, repoState } from "../../atom/repoState";
import { SearchState } from "../../atom/searchState";
import { Button } from "../../components/Button";
import { FlexBox } from "../../components/FlexBox";
import { Header } from "../../components/Header";
import { RepoItem } from "../../components/RepoItem";
import { getQueryString, useRepos } from "../../hooks/useRepos";
import { CustomRepo, Repo } from "../../types";
import { ListWrapper, PageWrapper, Ul } from "./styles";
import { useRouter } from "../routing";

export function SearchRepos() {
  const searchValue = useRecoilValue(SearchState);
  const [storeRepo, setStoreRepo] = useRecoilState(repoState);
  const [repoInfo, setRepoInfo] = useRecoilState(repoInfoState);
  const [page, setPage] = useState(1);
  const router = useRouter();
  const repos = useRepos(page);

  // response rendering
  const validRepo = (newRepo: Repo, repoList: CustomRepo) => {
    return !!repoList.registeredRepo.find((el) => el.id === newRepo.id);
  };
  const registerRepo = (repo: Repo) => {
    const {
      id,
      name,
      owner: { login },
    } = repo;

    if (
      storeRepo.registeredRepo.length <= 4 &&
      validRepo(repo, storeRepo) === false
    ) {
      // 같은 repo 면 등록 안 되는 로직 구현 해야함
      setStoreRepo({
        registeredRepo: [
          ...storeRepo.registeredRepo,
          { id, name, owner: login },
        ],
      });
    } else {
      // modal 구현
      alert("더 이상 등록 할 수 없습니다.");
    }
  };
  // if (repos.data.length === 0) return <h1>상단의 검색어를 입력하세요</h1>;
  return (
    <PageWrapper>
      <Header />
      <h1>Search results</h1>

      {repos.data.length === 0 ? (
        <FlexBox>
          <h1>상단에 검색어를 입력해 주세요</h1>
        </FlexBox>
      ) : (
        <Ul>
          {repos.data.map((repo) => {
            return (
              <ListWrapper key={repo.id}>
                <RepoItem
                  onClick={() => {
                    setRepoInfo({
                      name: repo.name,
                      owner: repo.owner.login,
                    });
                    router.push(`/repo/${repo.name}/${repo.owner.login}`);
                  }}
                  id={repo.id}
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
      )}
    </PageWrapper>
  );
}
