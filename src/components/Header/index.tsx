import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { SearchState } from "../../atom/searchState";
import { Input } from "../Input";
export interface Props {
  onSubmitHandler?: () => void;
}

const TopHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
`;

// 스타일 수정
export const Header = ({ onSubmitHandler }: Props) => {
  const [search, setSearch] = useRecoilState(SearchState);
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <TopHeader>
      <Input onChange={onChangeHandler} />
    </TopHeader>
  );
};
