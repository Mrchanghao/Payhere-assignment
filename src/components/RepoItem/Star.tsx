import styled from "styled-components";

export const Star = () => {
  return (
    <Svg>
      <symbol id="star" viewBox="0 0 98 92" />
      <title>star</title>
      <path
        stroke="#000"
        stroke-width="5"
        d="M49 73.5L22.55 87.406l5.05-29.453-21.398-20.86 29.573-4.296L49 6l13.225 26.797 29.573 4.297-21.4 20.86 5.052 29.452z"
        fill-rule="evenodd"
      />
    </Svg>
  );
};

const Svg = styled.svg`
  width: 1rem;
  height: 1rem;
  fill: white;
  pointer-events: none;
`;
