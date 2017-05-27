import React, { PureComponent } from 'react';
import { Container, AWrapper, UL, H2, LI } from '../PagesStyled';
import { ImgContainer, IMG, ImgSmall, ExtraText } from './CurrentStyled';
import test from '../../../../assets/test_output.png';
import score from '../../../../assets/100.png';
import toggle from '../toggleFullScreen';

export default class Projects extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      fullscreen: false,
    };
  }

  toggleFullScreen = toggle;

  render() {
    const { fullscreen } = this.state;
    return (
      <Container>
        <UL>
          <H2>
            Current Site
          </H2>
          <LI>
            Es6/esNExt / immutable.js / react / redux / redux-saga / react-router /  styled-components /
            jest / enzyme / reselect / helmet / font face observer / service workers!
          </LI>
          <AWrapper>
            <a rel="dns-prefetch" href="https://github.com/IamJoseph/JoesReactWebsite" target="_blank">
            App @ GitHub
          </a>
          </AWrapper>
          <div>
            Sporting features such as SEO friendly meta-data, offline first, and check out those test scores!
          </div>
          <ImgContainer
            onClick={() => this.toggleFullScreen('fullscreen')}
            className={fullscreen && 'clicked'}
          >
            <IMG src={test} alt="output of running jest / enzyme tests" />
            <ImgSmall src={score} alt="emoji for emphasis" />
          </ImgContainer>
          <ExtraText>
            You might think to yourself, why so much effort for a <em>simple</em> website?
            <br /><br />Take a look at the code on Github
            and you will understand, it&apos;s all about scalability! Scalability, performance, and best practices.
            The same stack and architecture are applicable for enterprise level applications. <br /><br />I also enjoy new technologies and
            feel appreciation for the efforts of the talented devs creating these wonderful packages; it&apos;d be a crime not
            to use them!
          </ExtraText>
        </UL>
      </Container>
    );
  }
}
