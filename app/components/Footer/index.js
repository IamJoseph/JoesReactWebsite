/**
*
* Footer
*
*/

import React from 'react';
import { Container, InnerContainer, Email } from './FooterStyled';

export default function Footer() {
  return (
    <Container>
      <InnerContainer>
        <Email>email: iamjoe@joeireland.com</Email>
      </InnerContainer>
    </Container>
  );
}
