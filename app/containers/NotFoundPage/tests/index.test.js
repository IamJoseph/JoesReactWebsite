import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NotFoundPage from '../index';

describe('<NotFoundPage />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <NotFoundPage />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
