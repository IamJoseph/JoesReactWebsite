import React from 'react';
import { Container, SVGStyles } from './AstronautStyled';
import AstronautSVG from './AstronautSVG';

export default function Astronaut() {
  return (
    <Container className="astronaut">
      <SVGStyles>
        <AstronautSVG />
      </SVGStyles>
    </Container>
  );
}
