import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Current from '../index';
import { ImgContainer } from '../CurrentStyled';

describe('<Current />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Current />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should toggle className clicked on image container when clicked', () => {
    const wrapper = shallow(<Current />);
    wrapper.find(ImgContainer).simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
