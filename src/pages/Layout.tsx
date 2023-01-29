import { ReactNode } from "react";
import styled from "styled-components";
import { Header } from "../components/Header";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  max-width: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  height: auto;
`;

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
}
