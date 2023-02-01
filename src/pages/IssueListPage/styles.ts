import styled from "styled-components";
import { State } from "../../types";

export const TextWrapper = styled.div`
  display: flex;
  width: 80%;
  margin: 30px;
  position: relative;
  padding-left: 0px;
  padding-top: 0px;
  align-items: center;
  margin-bottom: 0;
 
  border-bottom: 0;
  height: 56px;
 
  justify-content: flex-start;
`

export const StateH2 = styled.h2`
  display: flex;
  justify-content: flex-start;
  margin-left: 1rem;
  width: 50%;
  align-items: center;
`

export const StateSpan = styled.span`
  cursor: pointer;  
  margin-left: 1rem;
`
export const StateOpenSpan = styled(StateSpan)<{state: State}>`
  color: ${({state}) => state === 'open' ? 'green': 'rgb(180, 183, 187)'};
  font-weight: ${({state}) => state === 'open' ? 'bold': '200'};
`
export const StateClosedSpan = styled(StateSpan)<{state: State}>`
  color: ${({state}) => state === 'closed' ? 'purple': 'rgb(180, 183, 187)'};
  font-weight: ${({state}) => state === 'closed' ? 'bold': '200'};
`
export const StateAllSpan = styled(StateSpan)<{state: State}>`
  color: ${({state}) => state === 'all' ? 'red' : 'rgb(180, 183, 187)'};
  font-weight: ${({state}) => state === 'all' ? 'bold': '200'};
`

export const BackBtn = styled.button`
   margin: 1rem auto;
  width: 100px;
  position: absolute;
  top: 0;
  left: -130px;
  font-size: 12px;
  text-align: center;
  background-color: #eee;
  padding: 0.5rem 0;
  display: block;
  color: #333;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.2s;
  box-shadow: 1px 1px 5px 0px rgba(50, 50, 50, 0.6);
  border-radius: 8px;
  &:hover {
    color: #eee;
    background-color: #333;
  }
  span {
    position: relative;
   
  }
`