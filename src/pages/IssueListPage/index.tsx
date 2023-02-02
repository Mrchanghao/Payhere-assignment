import { useState, useEffect, Suspense } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { repoInfoState } from "../../atom/repoState";
import { useRouter } from "../routing";
import { useParams } from "react-router-dom";
import { PageWrapper } from "../SearchRepo/styles";
import { IssueList } from "../../components/IssueList";
import { LoadingIndicator } from "../../components/LoadingIndicator";
import { State } from "../../types";
import { FlexBox } from "../../components/FlexBox";
import {
  BackBtn,
  StateAllSpan,
  StateClosedSpan,
  StateH2,
  StateOpenSpan,
  TextWrapper,
} from "./styles";
import { firstIssueItem } from "../../atom/issueState";
import { Pagination } from "../../components/Pagination";

export const IssueListPage = () => {
  const [page, setPage] = useState(1);
  const [state, setState] = useState<State>("open");
  const params = useParams<{ repoName: string; ownerName: string }>();

  const [repoInfo, setRepoInfo] = useRecoilState(repoInfoState);
  const { state: loading, contents } = useRecoilValueLoadable(
    firstIssueItem({
      owner: repoInfo.owner,
      repo: repoInfo.name,
      state,
      page,
    })
  );
  const router = useRouter();
  useEffect(() => {
    if (repoInfo.name.length === 0 || repoInfo.owner.length === 0) {
      setRepoInfo({
        name: params.repoName as string,
        owner: params.ownerName as string,
      });
    }
  }, [repoInfo, params]);

  return (
    <PageWrapper>
      <TextWrapper>
        <BackBtn onClick={() => router.back()}>
          <span>Back</span>
        </BackBtn>
        <h2>{repoInfo.name}'s Issue</h2>
        <StateH2>
          <StateOpenSpan onClick={() => setState("open")} state={state}>
            open
          </StateOpenSpan>
          <StateClosedSpan onClick={() => setState("closed")} state={state}>
            closed
          </StateClosedSpan>
          <StateAllSpan onClick={() => setState("all")} state={state}>
            All
          </StateAllSpan>
        </StateH2>
      </TextWrapper>
      <Suspense
        fallback={
          <FlexBox>
            <LoadingIndicator />
          </FlexBox>
        }>
        <IssueList
          page={page}
          state={state}
          setPage={setPage}
          ownerName={repoInfo.owner}
          repoName={repoInfo.name}
        />
      </Suspense>
      {/*  */}
      {loading === "hasValue" && (
        <Pagination limit={20} page={page} setPage={setPage} total={contents} />
      )}
    </PageWrapper>
  );
};
