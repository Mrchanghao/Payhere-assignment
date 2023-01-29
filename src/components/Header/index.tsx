import debounce from "lodash.debounce";
import { ChangeEvent, FormEvent, useMemo } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { SearchState } from "../../atom/searchState";
import { Input } from "../Input";
import { Form, TopHeader } from "./styles";
import { Button } from "../Button/index";

// 스타일 수정
export const Header = () => {
  const [search, setSearch] = useRecoilState(SearchState);
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const debounceResult = useMemo(() => {
    return debounce(onChangeHandler, 200);
  }, []);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
  };

  return (
    <TopHeader>
      <div>
        <Form onSubmit={submitHandler}>
          <Input onChange={debounceResult} />
          <Button type="submit">search</Button>
        </Form>
      </div>
    </TopHeader>
  );
};
