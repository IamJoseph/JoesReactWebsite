import styled from 'styled-components';
import nasa from '../../../assets/nasa.jpg';
import star from '../../../assets/star_icon.png';

export const Container = styled.section`
  padding: 1em 2em 4em 2em;
  width: 100%;
  @media(min-width: 768px){
    padding: 1em 3em;
  }
`;

export const AWrapper = styled.div`
  line-height: normal;
  margin: 1.5em 0;
  text-align: center;
  a {
    color: #6d8da7;
  }
`;

export const H2 = styled.h2`
  background: -webkit-linear-gradient(transparent, transparent), url(${nasa});
  background-size: contain;
  color: #686664;
  font-family: sans-serif;
  font-size: 1.9em;
  letter-spacing: 1px;
  line-height: normal;
  text-align: center;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px;
  word-break: break-word;
  @media(min-width: 768px){
    font-size: 2.5em;
  }
`;

export const LI = styled.li`
  &::before{
    content: url(${star});
    margin-right: 1em;
  }
`;

export const UL = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  line-height: 2.5em;
  list-style: none;
  max-width: 100%;
  padding: 0;
`;
