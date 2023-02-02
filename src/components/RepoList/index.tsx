import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { repoAsyncState, repoInfoState } from "../../atom/repoState";
import { useRouter } from "../../pages/routing";
import { Repo } from "../../types";
import { Button } from "../Button";
import { Pagination } from "../Pagination";
import { RepoItem } from "../RepoItem";
import { Ul, ListWrapper, H1 } from "./styles";

interface RepoListProps {
  // repos: Repo[];
  page: number;
  registerRepo: (repo: Repo) => void;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const RepoList = ({ setPage, page, registerRepo }: RepoListProps) => {
  const [, setRepoInfo] = useRecoilState(repoInfoState);
  const router = useRouter();
  const repos = useRecoilValue(repoAsyncState({ page }));
  if (!repos) return <H1>검색 결과가 존재하지 않습니다.</H1>;
  return (
    <>
      <H1>Repo Results</H1>
      <Ul>
        {repos.items.map((repo, index) => {
          return (
            <ListWrapper key={repo.id + index}>
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

              <Button
                style={{ marginLeft: "20px" }}
                onClick={() => registerRepo(repo)}>
                저장소 등록
              </Button>
            </ListWrapper>
          );
        })}
      </Ul>
    </>
  );
};
