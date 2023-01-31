import styled from "styled-components"
import { Issues } from "../../types"
import { IssueItem } from "../IssueItem";

interface IssueListProps {
  issueList: Issues;
  totalIssue?: number;
  ownerName: string;
  repoName: string;
}

export const IssueList = ({issueList, totalIssue, repoName, ownerName}: IssueListProps) => {
  console.log(issueList);
  return (
    <ListWrapper>
      <GridWrapper>

      {issueList.map((issue) => {
        return <IssueItem key={issue.id} issue={issue} repoName={repoName} ownerName={ownerName} />
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
  flex-direction: column;
`

const GridWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 0px;
  width: auto;
  cursor: pointer;
  vertical-align: middle;
  border: 1px solid #304156;
  border-bottom: none;
`