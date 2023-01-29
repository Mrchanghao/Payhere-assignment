import styled from "styled-components";
import { Star } from "./Star";

interface Props {
  owner: string;
  name: string;
  desc?: string;
  star?: number;
  license?: string;
}

export const RepoItem = ({ license, owner, name, desc, star }: Props) => {
  return (
    <Box>
      <Column fontSize={1.2}>
        {owner}/{name}
      </Column>
      <Column fontSize={1}>{desc}</Column>
      <Column fontSize={1}>
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

const Column = styled.div<{ fontSize?: number }>`
  font-weight: bold;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}rem` : "1.2rem")};
  color: #0969da;
  height: 30%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
