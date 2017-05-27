import styled from 'styled-components';
import planet from '../../assets/planet.png';

export const Container = styled.section`
  background: url(${planet}), hsla(51, 35%, 90%, .5);
  background-position: 20% 30%;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0px 0px 7px 0px #a2a2a2;
  height: 100%;
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

export const H1Container = styled.div`
  display: flex;
  justify-content: center;
  transform: rotate(-2deg);
  width: 100%;
`;

export const H1 = styled.h1`
  background-color: #fffef6;
  box-shadow: 0px 2px 5px 0px #a85d5d;
  color: #686664;
  padding: .1em .2em;
  textAlign: center;
`;
