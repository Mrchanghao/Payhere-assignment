import { useRecoilValue } from "recoil";
import styled from "styled-components"
import { issuesListAsyncState } from "../../atom/issueState";
import { Issues, State } from "../../types"
import { FlexBox } from "../FlexBox";
import { IssueItem } from "../IssueItem";
import { LoadingIndicator } from "../LoadingIndicator";

interface IssueListProps {
  // issueList: Issues;
  state: State;
  totalIssue?: number;
  ownerName: string;
  page: number;
  // loading: boolean;
  repoName: string;
}

export const IssueList = ({ state, totalIssue, repoName, ownerName, page}: IssueListProps) => {
  const issueList = useRecoilValue(issuesListAsyncState({owner: ownerName, repo: repoName, state, page}))
 
if (issueList.length === 0 || !issueList) return null;

return (
      <ListWrapper>
      <GridWrapper>
      {issueList.map((issue) => {
        return <IssueItem key={issue.id} issue={issue} />
      })}
       </GridWrapper>
    </ListWrapper>
)
}


const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 100%;
  flex-direction: column;
`

const GridWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 0px;
 width: 80%;
  cursor: pointer;
  vertical-align: middle;
  border: 1px solid #304156;
  
`