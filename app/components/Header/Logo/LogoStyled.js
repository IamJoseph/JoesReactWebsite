import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  margin-left: 1.87em;
  @media(min-width: 414px){
    margin-left: 2.9em;
  }
  @media(min-width: 1024px){
    margin-left: 4.3em;
  }
`;

export const LogoSVG = styled.img`
  color: #6d8da7;
  height: 3.75em;
  width: 4.69em;
`;

export const LogoTextInner = styled.div`
  font-size: .7em;
  margin-top: -1px;
`;

export const LogoTextOuter = styled.div`
  color: #fffef6;
  font-size: 1.1em;
  padding-left: .8em;
  text-align: center;
`;
