import React from 'react';
import { shallow } from 'enzyme';
import AstronautSVG from '../AstronautSVG';
import HelmetText from '../HelmetText';

describe('<Astronaut />', () => {
  it('renders an svg', () => {
    const renderedComponent = shallow(
      <AstronautSVG></AstronautSVG>
    );
    expect(
      renderedComponent.find('svg').node
    ).toBeDefined();
  });

  it('render component <HelmetText>', () => {
    const renderedComponent = shallow(
      <AstronautSVG></AstronautSVG>
    );
    expect(
      renderedComponent.contains(
        <HelmetText />
      )).toEqual(true);
  });
});
