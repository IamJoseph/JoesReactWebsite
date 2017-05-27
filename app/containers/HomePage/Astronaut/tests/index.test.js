import React from 'react';
import { shallow } from 'enzyme';
import Astronaut from '../index';
import AstronautSVG from '../AstronautSVG';

describe('<Astronaut />', () => {
  it('render component <AstronautSVG>', () => {
    const wrapper = shallow(
      <Astronaut></Astronaut>
    );
    expect(
      wrapper.contains(
        <AstronautSVG />
      )).toEqual(true);
  });
});
