import React from 'react';
import facebookIcon from '../../../assets/facebook_logo.svg';
import githubIcon from '../../../assets/github_logo.svg';
import linkedInIcon from '../../../assets/linkedIn_logo.svg';
import twitterIcon from '../../../assets/twitter_logo.svg';
import { Container, A, IMG } from './LinkStyled';

export default function Links() {
  return (
    <Container>
      <div>
        <A rel="dns-prefetch" href="https://www.facebook.com/joseph.ireland.773" target="_blank"><IMG src={facebookIcon} alt="facebook icon" /></A>
        <A rel="dns-prefetch" href="https://github.com/IamJoseph" target="_blank"><IMG src={githubIcon} alt="github icon" /></A>
        <A rel="dns-prefetch" href="https://www.linkedin.com/in/joseph-ireland-5832b0a2" target="_blank"><IMG src={linkedInIcon} alt="linkedIn icon" /></A>
        <A rel="dns-prefetch" href="https://twitter.com/JosephIreland6" target="_blank"><IMG src={twitterIcon} alt="twitter icon" /></A>
      </div>
    </Container>
  );
}
