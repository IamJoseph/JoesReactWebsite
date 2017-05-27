import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../index';
import Astronaut from '../Astronaut';
import Text from '../Text';

describe('<HomePage />', () => {
  const wrapper = shallow(<HomePage />);

  it('render component <Astronaut>', () => {
    expect(
      wrapper.contains(<Astronaut />)
    ).toEqual(true);
  });

  it('render component <Text>', () => {
    expect(
      wrapper.contains(<Text />)
    ).toEqual(true);
  });
});
