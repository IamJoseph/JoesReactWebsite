import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Default from '../index';

describe('<Default />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <Default />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
