import styled from "styled-components";
import Icon from '../../assets/star_icon.svg';

export const Star = () => {
  return (
  	<Svg src={Icon} alt="icon" />
  );
};

const Svg = styled.img`
 
width: 15px;
height: 15px;
  margin-right: 0.5rem;
  pointer-events: none;
  
`;
