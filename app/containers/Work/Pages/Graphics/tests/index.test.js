import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Graphics from '../index';
import { ImgContainer } from '../GraphicsStyled';

describe('<Graphics />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <Graphics />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should toggle className clicked on 1st image container when clicked', () => {
    const wrapper = shallow(<Graphics />);
    wrapper.find(ImgContainer).at(0).simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should toggle className clicked on 2nd image container when clicked', () => {
    const wrapper = shallow(<Graphics />);
    wrapper.find(ImgContainer).at(1).simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should toggle className clicked on 3rd image container when clicked', () => {
    const wrapper = shallow(<Graphics />);
    wrapper.find(ImgContainer).at(2).simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should toggle className clicked on 4th image container when clicked', () => {
    const wrapper = shallow(<Graphics />);
    wrapper.find(ImgContainer).at(3).simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
