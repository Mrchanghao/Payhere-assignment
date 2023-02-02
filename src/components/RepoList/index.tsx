import { memo } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { repoAsyncState, repoInfoState, repoState } from "../../atom/repoState";
import { useRouter } from "../../pages/routing";
import { Repo, CustomRepo } from "../../types";
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

export const RepoList = memo(
  ({ setPage, page, registerRepo }: RepoListProps) => {
    const [, setRepoInfo] = useRecoilState(repoInfoState);
    const [repoList, setRepoList] = useRecoilState(repoState);
    const router = useRouter();
    const repos = useRecoilValue(repoAsyncState({ page }));

    const clickEventHandler = (repo: Repo) => {
      setRepoInfo({
        name: repo.name,
        owner: repo.owner.login,
      });
      router.push(`/repo/${repo.name}/${repo.owner.login}`);
    };

    const deleteRepo = (repoList: CustomRepo, repo: Repo) => {
      const deletedRepo = repoList.registeredRepo.filter(
        (el) => el.id !== repo.id
      );
      setRepoList({
        registeredRepo: [...deletedRepo],
      });
    };

    if (!repos) return <H1>검색 결과가 존재하지 않습니다.</H1>;
    return (
      <>
        <H1>Repo Results</H1>
        <Ul>
          {repos.items.map((repo, index) => {
            return (
              <ListWrapper key={repo.id + index}>
                <RepoItem
                  onClick={() => clickEventHandler(repo)}
                  id={repo.id}
                  owner={repo.owner.login}
                  name={repo.name}
                  desc={repo.description}
                  star={repo.stargazers_count}
                />
                {repoList.registeredRepo.some((el) => el.id === repo.id) ? (
                  <Button
                    bg="danger"
                    style={{ marginLeft: "20px" }}
                    onClick={() => deleteRepo(repoList, repo)}>
                    삭제하기
                  </Button>
                ) : (
                  <Button
                    style={{ marginLeft: "20px" }}
                    onClick={() => registerRepo(repo)}>
                    저장하기
                  </Button>
                )}
              </ListWrapper>
            );
          })}
        </Ul>
      </>
    );
  }
);
