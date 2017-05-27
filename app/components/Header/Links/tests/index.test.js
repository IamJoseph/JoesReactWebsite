import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Links from '../index';
import { IMG, Link, UL } from '../LinksStyled';

describe('<Links />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Links />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('calls componentDidUpdate when new state added, ul classname is not "hide" if state.open is true', () => {
    const wrapper = shallow(<Links />);
    const spy = jest.spyOn(Links.prototype, 'componentDidUpdate');
    expect(spy).not.toHaveBeenCalled();
    wrapper.setState({ open: true });
    expect(spy).toHaveBeenCalled();
    expect(wrapper.find(UL).hasClass('hide')).toBe(false);
  });

  it('toggles state.open when button pressed', () => {
    const wrapper = shallow(<Links />);
    expect(wrapper.state().open).toEqual(false);
    wrapper.find(IMG).simulate('click');
    expect(wrapper.state().open).toEqual(true);
    wrapper.find(IMG).simulate('click');
    expect(wrapper.state().open).toEqual(false);
  });


  it('renders three links i.e. Home,Work,Contact', () => {
    const wrapper = shallow(<Links />);
    expect(wrapper.find(Link).length).toEqual(3);
  });
});
