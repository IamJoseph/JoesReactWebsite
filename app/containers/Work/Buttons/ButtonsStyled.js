import styled from 'styled-components';
import { Link as Linked } from 'react-router-dom';

export const Container = styled.div`
  flex: 1.5;
  flex-wrap: wrap;
  font-weight: bold;
  height: 85%;
  list-style-type: none;
  margin-top: 85px;
  text-align: center;
  @media(min-width: 768px){
    flex: 1;
  }
`;

const buttonColor = (type, hue, active) => {
  switch (type) {
    case 'borderTop':
      if (active) {
        return `hsl(${hue}, 50%, 72%)`;
      }
      return `hsl(${hue}, 69%, 82%)`;
    case 'borderBottom':
      if (active) {
        return `hsl(${hue}, 38%, 69%)`;
      }
      return `hsl(${hue}, 55%, 76%)`;
    case 'boxShadow':
      return `hsl(${hue}, 41%, 73%)`;
    case 'background':
    default:
      return `hsl(${hue}, 70%, 78%)`;
  }
};

export const LI = styled.li`
  background-color: ${({ color }) => buttonColor('background', color)};
  border-bottom: ${({ color, active }) => `3px solid ${buttonColor('borderBottom', color, active)}`};
  border-bottom-left-radius: ${({ bottomRadius }) => bottomRadius ? '5px' : 0};
  border-top: ${({ color, active }) => `3px solid ${buttonColor('borderTop', color, active)}`};
  border-top-left-radius: ${({ topRadius }) => topRadius ? '5px' : 0};
  box-shadow: ${({ color, active, boxShadow }) => {
    if (active && boxShadow) {
      return `0px -1px 20px 0px ${buttonColor('boxShadow', color)} inset, 2px 4px 5px -2px #bacaaa`;
    } else if (boxShadow) {
      return '2px 4px 5px -2px #bacaaa';
    } else if (active) {
      return `0px -1px 20px 0px ${buttonColor('boxShadow', color)} inset`;
    }
    return '';
  }};
  cursor: pointer;
  padding: 0;
`;

export const Link = styled(Linked)`
  color: #fffef6;
  display: inline-block;
  height: 100%;
  padding: 1em 0;
  text-decoration: none;
  user-select: none;
  width: 100%;
`;
