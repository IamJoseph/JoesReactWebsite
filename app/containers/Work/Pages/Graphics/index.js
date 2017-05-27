import React, { PureComponent } from 'react';
import { IMG, ImgContainer } from './GraphicsStyled';
import { Container, UL, H2, LI } from '../PagesStyled';
import bricksTee from '../../../../assets/bricks.png';
import cometTee from '../../../../assets/comet.png';
import museumTee from '../../../../assets/museum.png';
import officeDogTee from '../../../../assets/office_dog.png';
import toggle from '../toggleFullScreen';

export default class Graphics extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      bricks: false,
      comet: false,
      museum: false,
      officeDog: false,
    };
  }

  toggleFullScreen = toggle;

  render() {
    const { bricks, comet, museum, officeDog } = this.state;
    return (
      <Container>
        <UL>
          <H2>
            Graphics
          </H2>
          <LI>
            Conceptual vectored tee designs
          </LI>
          <ImgContainer onClick={() => this.toggleFullScreen('bricks')} className={bricks && 'clicked'}>
            <IMG src={bricksTee} alt="brick red style graphic tee" />
          </ImgContainer>
          <ImgContainer onClick={() => this.toggleFullScreen('comet')} className={comet && 'clicked'}>
            <IMG src={cometTee} alt="floating island abstract light grey graphic tee" />
          </ImgContainer>
          <ImgContainer onClick={() => this.toggleFullScreen('museum')} className={museum && 'clicked'}>
            <IMG src={museumTee} alt="museum dark grey graphic tee" />
          </ImgContainer>
          <ImgContainer onClick={() => this.toggleFullScreen('officeDog')} className={officeDog && 'clicked'}>
            <IMG src={officeDogTee} alt="blue office worker dog graphic tee" />
          </ImgContainer>
        </UL>
      </Container>
    );
  }
}
