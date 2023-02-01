import styled from "styled-components"
import { Issues } from "../../types"
import { FlexBox } from "../FlexBox";
import { IssueItem } from "../IssueItem";
import { LoadingIndicator } from "../LoadingIndicator";

interface IssueListProps {
  issueList: Issues;
  totalIssue?: number;
  ownerName: string;
  loading: boolean;
  repoName: string;
}

export const IssueList = ({ loading, issueList, totalIssue, repoName, ownerName}: IssueListProps) => {
  console.log(issueList);
 if (loading === true) {
    return <FlexBox style={{height: '100%'}}>
      <LoadingIndicator />
    </FlexBox>
  }
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