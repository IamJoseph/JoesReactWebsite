import React from 'react';
import { shallow } from 'enzyme';
import { NavBar, LeftRoof, RightRoof } from '../HeaderStyled';

describe('<NavBar />', () => {
  it('should render an <div> tag', () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper.type()).toEqual('div');
  });
});

describe('<LeftRoof />', () => {
  it('should render an <div> tag', () => {
    const wrapper = shallow(<LeftRoof />);
    expect(wrapper.type()).toEqual('div');
  });
});

describe('<RightRoof />', () => {
  it('should render an <div> tag', () => {
    const wrapper = shallow(<RightRoof />);
    expect(wrapper.type()).toEqual('div');
  });
});
