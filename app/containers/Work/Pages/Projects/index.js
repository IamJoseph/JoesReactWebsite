import React, { PureComponent } from 'react';
import { Container, AWrapper, LI } from '../PagesStyled';
import { UL, H2, I, Div, Video, VideoContainer, IMG, ImgContainer } from './ProjectsStyled';
import farmboyInv from '../../../../assets/farmboy_inventory.gif';
import borkVid from '../../../../assets/Bork_720.mp4';
import toggle from '../toggleFullScreen';

export default class Projects extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      bork: false,
      inventory: false,
    };
  }

  toggleFullScreen = toggle;

  render() {
    const { bork, inventory } = this.state;
    return (
      <Container>
        <UL>
          <H2 style={{ fontSize: '3em' }}>
            Bork <span role="img" aria-label="dog">&#128054;</span>
          </H2>
          <I>for iOS and Android</I>
          <Div>
            <AWrapper>
              <a rel="dns-prefetch" href="https://github.com/IamJoseph/Bork" target="_blank">
              Bork @ GitHub
            </a>
            </AWrapper>
            <LI>
              react-native / redux / redux-thunk / react-router-native-flux / babel /
              webpack / react-native-maps / react-native-camera / firebase
            </LI>
            <LI>
              Pure es6/esNext implementation
            </LI>
            <em>
              Click the GitHub link for more details!
            </em>
          </Div>
          <VideoContainer onClick={() => this.toggleFullScreen('bork')} className={bork && 'clicked'}>
            <Video autoPlay muted playsInline loop src={borkVid} />
          </VideoContainer>
        </UL>
        <UL>
          <H2>
            Farmboy Inventory
          </H2>
          <Div>
            <AWrapper>
              <a rel="dns-prefetch" href="https://github.com/IamJoseph/InventoryGUI" target="_blank">
              InventoryGUI @ GitHub
            </a>
            </AWrapper>
            <LI>
              MySQLi / php / jquery / jquery-ui
            </LI>
          </Div>
          <ImgContainer onClick={() => this.toggleFullScreen('inventory')} className={inventory && 'clicked'}>
            <IMG src={farmboyInv} alt="farmboy inventory application" />
          </ImgContainer>
        </UL>
      </Container>
    );
  }
}
