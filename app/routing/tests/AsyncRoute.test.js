import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import loader from 'containers/Work/loader';
import AsyncRoute from '../AsyncRoute';

describe('<AsyncRoute />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <AsyncRoute
        exact path="/work" load={loader()}
      />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
