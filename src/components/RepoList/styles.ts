import styled from "styled-components";

export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0;
  min-width: 70%;
  margin-left: 10%;
`

export const ListWrapper = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
  background-color: ${props => props.theme.background};
  
`

export const H1 = styled.h1`
  margin-bottom: 10px;
`