import debounce from "lodash.debounce";
import {
  ChangeEvent,
  EventHandler,
  FormEvent,
  FormEventHandler,
  useMemo,
} from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { SearchState } from "../../atom/searchState";
import { Input } from "../Input";

export interface Props {}

const TopHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
`;

// 스타일 수정
export const Header = () => {
  const [search, setSearch] = useRecoilState(SearchState);
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const debounceResult = useMemo(() => {
    return debounce(onChangeHandler, 500);
  }, []);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
  };

  return (
    <TopHeader>
      <div>
        <form onSubmit={submitHandler}>
          <Input onChange={debounceResult} />
          <button type="submit">search</button>
        </form>
      </div>
    </TopHeader>
  );
};
