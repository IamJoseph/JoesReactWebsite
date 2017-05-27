import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Projects from '../index';
import { VideoContainer, ImgContainer } from '../ProjectsStyled';

describe('<Projects />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <Projects />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should toggle className clicked on video container when clicked', () => {
    const wrapper = shallow(<Projects />);
    wrapper.find(VideoContainer).simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should toggle className clicked on image container when clicked', () => {
    const wrapper = shallow(<Projects />);
    wrapper.find(ImgContainer).simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
