import styled from "styled-components";
import { useRouter } from "../../pages/routing";
import { Issue } from "../../types";
import { FlexBox } from "../FlexBox";
import { Circle } from "./Circle";
import { CommnetIcon } from "./CommentIcon";

interface IssueProps {
  issue: Issue;
  
}

export const IssueItem = ({issue}: IssueProps) => {
  
  const pushToUrl = () => {
    if(window) {
      window.location.href = issue.html_url;
     
    }
  }
  return (
    <ItemWrapper onClick={pushToUrl} justifyContent="space-between" >
      <FlexBox>
        <Circle state={issue.state} />
        <h4>{issue.title}</h4>
       
      </FlexBox>
      <CommentBox >
        <CommnetIcon />
        <span>{issue.comments}</span>
      </CommentBox>
    </ItemWrapper>
  )
}

const ItemWrapper = styled(FlexBox)`
  background-color: transparent;
  width: 98.7%;
  border-bottom: 1px solid #304156;
  padding: 10px;
  
  cursor: pointer;
  
  height: 62px;
  min-height: auto;
  font-size: 18px;
  h4 {
    margin-left: 10px;
    cursor: pointer;
  }
`

const State = styled.h5<{state: string}>`
  display: inline-block;
  padding: 0 7px;
  font-size: 12px; 
  font-weight: 500;
  border: 1px solid transparent;
  border-radius: 2em;
  text-decoration: none;
`

const CommentBox = styled(FlexBox)`
  margin-bottom: 8px;
  cursor: pointer;
  span {
    margin-left: 4px;
    margin-bottom: 2px;
  }
`