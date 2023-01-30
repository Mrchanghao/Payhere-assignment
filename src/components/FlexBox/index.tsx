import styled from 'styled-components';

interface IFlexBox {
  direction?: 'row' | 'column';
  alignItems?: 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  gap?: number;
  width?: string;
  height?: string;
}

export const FlexBox = styled.div<IFlexBox>`
  display: flex;
  flex-direction: ${props => (props.direction ? props.direction : 'row')};
  align-items: ${props => (props.alignItems ? props.alignItems : 'center')};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'center'};
  gap: ${props => (props.gap ? props.gap : 0)}px;

  width: ${({ width }) => width || 'unset'};
  height: ${({ height }) => height || 'unset'};

  cursor: ${props => (props.onClick ? 'pointer' : 'auto')};
`;
