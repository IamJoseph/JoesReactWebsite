import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  align-self: center;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  left: 25px;
  max-width: 1460px;
  overflow: hidden;
  position: absolute;
  top: 65px;
  transform: translateZ(0);
  width: 100%;
  z-index: 1;
  @media(min-width: 768px){
    left: auto;
  }
`;

export const SVGStyles = styled.div`
  margin-top: 2em;
  margin-left: -100%;
  maxWidth: 1000px;
  width: 100%;
  @media(min-width: 768px){
    margin-left: 0;
    margin-top: 6.3em;
  }
`;
