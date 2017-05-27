/**
*
* Header
*
*/

import React from 'react';
import Logo from './Logo';
import { Container, LeftRoof, RightRoof, NavBar } from './HeaderStyled';
import Links from './Links';

export default function Header() {
  return (
    <Container>
      <NavBar>
        <Logo />
        <Links />
        <LeftRoof />
        <RightRoof />
      </NavBar>
    </Container>
  );
}
