import { useState, useEffect } from "react";
import styled from "styled-components";
import { useRecoilValue, useRecoilState } from "recoil";
import { repoInfoState } from "../../atom/repoState";
import { useIssues } from "../../hooks/useIssues";
import { useRouter } from "../routing";
import { useParams } from "react-router-dom";
import { stringify } from "qs";
import { PageWrapper } from "../SearchRepo/styles";
import { IssueList } from "../../components/IssueList";
import { LoadingIndicator } from "../../components/LoadingIndicator";

export const IssueListPage = () => {
  const [page, setPage] = useState(1);
  const params = useParams<{ repoName: string; ownerName: string }>();
  console.log(params);
  const [repoInfo, setRepoInfo] = useRecoilState(repoInfoState);
   
  const {data, loading} = useIssues(repoInfo.owner, repoInfo.name, page);

  const router = useRouter();
  useEffect(() => {
    if (repoInfo.name.length === 0 || repoInfo.owner.length === 0) {
      setRepoInfo({
        name: params.repoName as string,
        owner: params.ownerName as string,
      });
    }
  }, [repoInfo, params]);


  if (loading === true) {
    return <LoadingIndicator />
  }
  return (
    <PageWrapper>
      <TextWrapper>
        <h2>{repoInfo.name}'s Issue</h2>
      </TextWrapper>
      <IssueList issueList={data} ownerName={repoInfo.owner} repoName={repoInfo.name} />
    </PageWrapper>
  );
};




const TextWrapper = styled.div`
  display: flex;
  width: 70%;
  margin: 20px;
  justify-content: flex-start;
`