import React from 'react';
import { Container, LogoSVG, LogoTextOuter, LogoTextInner } from './LogoStyled';
import svg from '../../../assets/logo.svg';

export default function Logo() {
  return (
    <Container>
      <LogoSVG src={svg} alt="logo icon" />
      <LogoTextOuter>
        Joseph Ireland
        <LogoTextInner>
          Web Engineer
        </LogoTextInner>
      </LogoTextOuter>
    </Container>
  );
}
