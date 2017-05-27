import React from 'react';
import { shallow } from 'enzyme';
import Logo from '../index';
import { Container, LogoSVG, LogoTextOuter, LogoTextInner } from '../LogoStyled';
import svg from '../../../../assets/logo.svg';

describe('<Logo />', () => {
  const wrapper = shallow(<Logo />);
  it('renders <Container> and all children', () => {
    expect(
      wrapper.contains(
        <Container>
          <LogoSVG src={svg} alt="logo icon" />
          <LogoTextOuter>
            Joseph Ireland
            <LogoTextInner>
              Web Engineer
            </LogoTextInner>
          </LogoTextOuter>
        </Container>
    )).toBe(true);
  });
});
