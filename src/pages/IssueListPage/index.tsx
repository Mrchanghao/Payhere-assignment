import { useState, useEffect, Suspense } from "react";
import styled from "styled-components";
import { useRecoilValue, useRecoilState } from "recoil";
import { repoInfoState } from "../../atom/repoState";
import { useRouter } from "../routing";
import { useParams } from "react-router-dom";
import { stringify } from "qs";
import { PageWrapper } from "../SearchRepo/styles";
import { IssueList } from "../../components/IssueList";
import { LoadingIndicator } from "../../components/LoadingIndicator";
import { State } from "../../types";
import { FlexBox } from "../../components/FlexBox";
import { BackBtn, StateAllSpan, StateClosedSpan, StateH2, StateOpenSpan, TextWrapper } from "./styles";

export const IssueListPage = () => {
  const [page, setPage] = useState(1);
  const [state, setState] = useState<State>('open');
  const params = useParams<{ repoName: string; ownerName: string }>();
  console.log(params);
  const [repoInfo, setRepoInfo] = useRecoilState(repoInfoState);
   
  

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
      <BackBtn onClick={() => router.back()}><span>Back</span></BackBtn>
        <h2>{repoInfo.name}'s Issue</h2> 
        <StateH2>
          <StateOpenSpan onClick={() => setState('open')} state={state }>open</StateOpenSpan> 
          <StateClosedSpan onClick={() => setState('closed')} state={state }>closed</StateClosedSpan>
          <StateAllSpan onClick={() => setState('all')} state={state}>All</StateAllSpan>
        </StateH2> 

      
      </TextWrapper>
      <Suspense fallback={<FlexBox><LoadingIndicator/></FlexBox>}>
      <IssueList state={state} ownerName={repoInfo.owner} repoName={repoInfo.name} page={page} />
      </Suspense>
      
    
    </PageWrapper>
  );
};




