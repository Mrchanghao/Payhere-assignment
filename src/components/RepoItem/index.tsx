import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Star } from "./Star";

interface Props {
  owner: string;
  name: string;
  desc?: string;
  star?: number;
  license?: string;
  id: number;
  onClick: () => void;
}

export const RepoItem = ({ onClick, license, owner, name, desc, star, id }: Props) => {
 
  return (
    <Box onClick={onClick}>
      <Column fontSize={1.2}>
        {owner}/{name}
      </Column>
      <Column color={"#304156"} fontSize={1} height={40}>
        {desc}
      </Column>
      <Column color={"#304156"} fontSize={1}>
        <Star />
        {star}
        {license && <p>{license}</p>}
      </Column>
    </Box>
  );
};

const Box = styled.div`
  padding: 24px 0 24px 0;
  background-color: #fff;
  height: 113px;
  width: 80%;
  border-top: 1px solid #d0d7de;
  color: #24292f;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Column = styled.div<{ fontSize?: number; color?: string, height?: number }>`
  font-weight: bold;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}rem` : "1.2rem")};
  color: ${({ color }) => (color ? color : "#0969da")};
  height: ${({height}) => height ? `${height}%` : '30%'};
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
