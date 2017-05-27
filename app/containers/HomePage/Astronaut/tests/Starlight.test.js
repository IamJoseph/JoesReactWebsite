import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Starlight from '../Starlight';

describe('<Starlight />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <Starlight></Starlight>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
