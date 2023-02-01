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
import { State } from "../../types";
import { FlexBox } from "../../components/FlexBox";

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

  const {data, loading} = useIssues(repoInfo.owner, repoInfo.name, state, page);

  // if (loading === true) {
  //   return <FlexBox style={{height: '100%'}}>
  //     <LoadingIndicator />
  //   </FlexBox>
  // }

 


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
    
      <IssueList loading={loading} issueList={data} ownerName={repoInfo.owner} repoName={repoInfo.name} />
    
    </PageWrapper>
  );
};




const TextWrapper = styled.div`
  display: flex;
  width: 80%;
  margin: 30px;
  position: relative;
  padding-left: 0px;
  padding-top: 0px;
  align-items: center;
  margin-bottom: 0;
 
  border-bottom: 0;
  height: 56px;
 
  justify-content: flex-start;
`

const StateH2 = styled.h2`
  display: flex;
  justify-content: flex-start;
  margin-left: 1rem;
  width: 50%;
  align-items: center;
`

const StateSpan = styled.span`
  cursor: pointer;  
  margin-left: 1rem;
`
const StateOpenSpan = styled(StateSpan)<{state: State}>`
  color: ${({state}) => state === 'open' ? 'green': 'rgb(180, 183, 187)'};
  font-weight: ${({state}) => state === 'open' ? 'bold': '200'};
`
const StateClosedSpan = styled(StateSpan)<{state: State}>`
  color: ${({state}) => state === 'closed' ? 'purple': 'rgb(180, 183, 187)'};
  font-weight: ${({state}) => state === 'closed' ? 'bold': '200'};
`
const StateAllSpan = styled(StateSpan)<{state: State}>`
  color: ${({state}) => state === 'all' ? 'red' : 'rgb(180, 183, 187)'};
  font-weight: ${({state}) => state === 'all' ? 'bold': '200'};
`

const BackBtn = styled.button`
   margin: 1rem auto;
  width: 100px;
  position: absolute;
  top: 0;
  left: -130px;
  font-size: 12px;
  text-align: center;
  background-color: #eee;
  padding: 0.5rem 0;
  display: block;
  color: #333;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.2s;
  box-shadow: 1px 1px 5px 0px rgba(50, 50, 50, 0.6);
  border-radius: 8px;
  &:hover {
    color: #eee;
    background-color: #333;
  }
  span {
    position: relative;
   
  }
`