import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { issuesListAsyncState } from "../../atom/issueState";
import { Issues, State } from "../../types";
import { FlexBox } from "../FlexBox";
import { IssueItem } from "../IssueItem";
import { LoadingIndicator } from "../LoadingIndicator";
import { Pagination } from "../Pagination";

interface IssueListProps {
  // issueList: Issues;
  state: State;
  totalIssue?: number;
  ownerName: string;
  page: number;
  // loading: boolean;
  repoName: string;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const IssueList = ({
  state,
  totalIssue,
  repoName,
  ownerName,
  page,
  setPage,
}: IssueListProps) => {
  const issueList = useRecoilValue(
    issuesListAsyncState({ owner: ownerName, repo: repoName, state, page })
  );

  return (
    <>
      <ListWrapper>
        <GridWrapper>
          {issueList.map((issue) => {
            return <IssueItem key={issue.id} issue={issue} />;
          })}
        </GridWrapper>
      </ListWrapper>

      {/* <BtnNav>
        <NavButton onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </NavButton>

        <NavButton onClick={() => setPage(page + 1)}>&gt;</NavButton>
      </BtnNav> */}
    </>
  );
};

const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 100%;
  flex-direction: column;
`;

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
`;

const BtnNav = styled(FlexBox)`
  margin-top: 20px;
`;

const NavButton = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: black;
  color: white;
  font-size: 1rem;
  margin-left: 2rem;
  &:hover {
    background: tomato;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: grey;
    cursor: revert;
    transform: revert;
  }
`;
