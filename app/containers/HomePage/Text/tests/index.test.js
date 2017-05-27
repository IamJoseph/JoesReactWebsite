import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Text from '../index';

describe('<Text />', () => {
  it('should render correctly', () => {
    const wrapper = mount(
      <Text />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
