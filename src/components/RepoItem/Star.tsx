import styled from "styled-components";

export const Star = () => {
  return (
  	<Svg width={30} height={30} className="star rating" data-rating="1">
    <polygon points="M9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
  </Svg>
  );
};

const Svg = styled.svg`
 
  fill: white;
  margin-right: 0.5rem;
  pointer-events: none;
  polygon {
      fill: #d8d8d8;
    }
`;
