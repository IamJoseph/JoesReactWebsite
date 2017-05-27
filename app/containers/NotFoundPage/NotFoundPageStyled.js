import styled from 'styled-components';
import planet from '../../assets/planet.png';

export const Container = styled.section`
  align-items: center;
  background: url(${planet}), hsla(51, 35%, 90%, .5);
  background-position: 20% 30%;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0px 0px 7px 0px #a2a2a2;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin-left: 25px;
  margin-right: 25px;
  max-width: 1460px;
  overflow-y: auto;
  padding: 0 .5em;
  width: 100%;
  z-index: 1;
  @media(min-width: 768px){
    padding: 0 1em;
  }
  @media(min-width: 1150px){
    padding: 0 1.87em;
  }
`;

export const H1 = styled.h1`
  font-family: 'Coda', sans-serif;
`;
