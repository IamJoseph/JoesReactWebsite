import React from 'react';
import A from './ClientStyled';
import { Container, UL, H2 } from '../PagesStyled';
import Browser from './Browser';
import plushPaws from '../../../../assets/plush_paws.jpg';
import farmBoy from '../../../../assets/farmboy.jpg';
import interiorMark from '../../../../assets/interior_mark.jpg';

export default function Default() {
  return (
    <Container>
      <UL>
        <H2>
          Client Sites
        </H2>
        <A href="http://plushpawsinc.com" target="_blank">
          <Browser siteImg={plushPaws} text="Plush Paws Inc" />
        </A>
        <A href="http://interiormark.com" target="_blank">
          <Browser siteImg={interiorMark} text="InteriorMark" />
        </A>
        <A>
          <Browser siteImg={farmBoy} text="Farm Boy Kombucha" />
        </A>
      </UL>
    </Container>
  );
}
