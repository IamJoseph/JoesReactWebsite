import React from 'react';
import { shallow } from 'enzyme';
import Header from '../index';
import Logo from '../Logo';
import { Container, LeftRoof, RightRoof, NavBar } from '../HeaderStyled';
import Links from '../Links';

const wrapper = shallow(<Header />);

describe('<Header />', () => {
  it('renders <Container> and all children', () => {
    expect(
      wrapper.contains(
        <Container>
          <NavBar>
            <Logo />
            <Links />
            <LeftRoof />
            <RightRoof />
          </NavBar>
        </Container>
    )).toBe(true);
  });

  it('renders <Logo>', () => {
    expect(
      wrapper.contains(<Logo />)
    ).toBe(true);
  });

  it('renders <Links>', () => {
    expect(
      wrapper.contains(<Links />)
    ).toBe(true);
  });

  it('renders <LeftRoof>', () => {
    expect(
      wrapper.contains(<LeftRoof />)
    ).toBe(true);
  });

  it('renders <RightRoof>', () => {
    expect(
      wrapper.contains(<RightRoof />)
    ).toBe(true);
  });
});
