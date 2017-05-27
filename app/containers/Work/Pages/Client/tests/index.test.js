import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Client from '../index';

describe('<Client />', () => {
  it('should render correctly', () => {
    const wrapper = mount(
      <Client />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
