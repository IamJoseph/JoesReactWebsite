import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Work from '../index';

describe('<Work />', () => {
  it('should render correctly w/ work path', () => {
    const fakeProps = {
      location: {
        pathname: '/work',
      },
    };
    const wrapper = shallow(
      <Work {...fakeProps} />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render correctly w/ current_site path', () => {
    const fakeProps = {
      location: {
        pathname: '/work/current_site',
      },
    };
    const wrapper = shallow(
      <Work {...fakeProps} />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render correctly w/ client_sites path', () => {
    const fakeProps = {
      location: {
        pathname: '/work/client_sites',
      },
    };
    const wrapper = shallow(
      <Work {...fakeProps} />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render correctly w/ projects path', () => {
    const fakeProps = {
      location: {
        pathname: '/work/projects',
      },
    };
    const wrapper = shallow(
      <Work {...fakeProps} />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render correctly w/ graphics path', () => {
    const fakeProps = {
      location: {
        pathname: '/work/graphics',
      },
    };
    const wrapper = shallow(
      <Work {...fakeProps} />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render correctly with default value', () => {
    const fakeProps = {
      location: {
        pathname: '',
      },
    };
    const wrapper = shallow(
      <Work {...fakeProps} />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
