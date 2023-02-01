import styled from "styled-components";


export const ListWrapper = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
  background-color: ${props => props.theme.background};
  
`


export const PageWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0;
  min-width: 70%;
  margin-left: 10%;
`