import React from 'react';
import bluetoadLogo from '../../../../assets/bluetoad_logo.png';
import IMG from './DefaultStyled';
import { Container, UL, LI, H2 } from '../PagesStyled';

export default function Default() {
  return (
    <Container>
      <UL>
        <IMG src={bluetoadLogo} alt="bluetoad logo" />
        <div>July 2015 - Dec 2016</div>
        <div>
          <LI>
            Worked under pureMVC framework
          </LI>
          <LI>
            Dealt largely with cross domain communication
          </LI>
          <LI>
            Built unified metrics / analytics / GTM / thermostats API
          </LI>
          <LI>
            Created dynamic implementation of DFP
          </LI>
          <LI>
            Several UI overhauls
          </LI>
          <LI>
            Events refactor
          </LI>
          <LI>
            Colorbox
          </LI>
          <LI>
            SEO
          </LI>
          <LI>
            508 compliance
          </LI>
          <LI>
            AGILE w/ Jira
          </LI>
        </div>
      </UL>
      <UL>
        <H2 style={{ marginBottom: '.2em' }}>Web Development</H2>
        <div>Contract</div>
        <div>2014 - Present</div>
      </UL>
    </Container>
  );
}
