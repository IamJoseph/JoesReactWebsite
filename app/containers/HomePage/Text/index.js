import React from 'react';
import { Container, Text, H1 } from './TextStyled';
import Brush from '../../../assets/brush_stroke.png';

export default function TextContainer() {
  return (
    <Container>
      <Text className="textTransform">
        <div style={{ position: 'relative' }}>
          <H1>Hello</H1>
          <img style={{ width: '7.2em', marginTop: '-1.3em' }} alt="brush stroke under hello for emphasis and style" src={Brush} />
        </div>
        I&apos;m Joseph Ireland, a Web Engineer / Software Developer / Jack of all Trades Programmer from Orlando, FL.
      </Text>
      <Text right className="textTransform">
        I &#9825; space, technology, creativity, aesthetically pleasing UI and scalable performant code.
      </Text>
    </Container>
  );
}
