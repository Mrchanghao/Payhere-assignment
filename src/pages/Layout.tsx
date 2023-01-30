import { ReactNode } from "react";
import styled from "styled-components";
import { Header } from "../components/Header";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;

  width: 100%;
  height: calc(100vh - 100px);
  padding-bottom: 2rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  height: auto;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  text-align: center;
`;

export function Layout({ children }: { children: ReactNode }) {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
}
