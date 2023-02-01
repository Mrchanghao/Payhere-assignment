import { ChangeEvent, FormEvent, useMemo } from "react";
import { useRecoilState } from "recoil";
import { SearchState } from "../../atom/searchState";
import { Input } from "../Input";
import { Form, TopHeader } from "./styles";
import { Button } from "../Button/index";
import { useState } from "react";

// 스타일 수정
export const Header = () => {
  const [query, setQuery] = useState('');
  const [search, setSearch] = useRecoilState(SearchState);
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // setSearch(e.target.value);
    setQuery(e.target.value);
  };

  

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch(query);
    setQuery('');
  };

  return (
    <TopHeader>
      <div>
        <Form onSubmit={(e) => submitHandler(e)}>
          <Input value={query} onChange={onChangeHandler} />
          <Button type="submit">search</Button>
        </Form>
      </div>
    </TopHeader>
  );
};
