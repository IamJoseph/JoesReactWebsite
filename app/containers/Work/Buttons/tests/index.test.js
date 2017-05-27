import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import MemoryRouter from 'react-router/MemoryRouter';
import Buttons from '../index';
import Work from '../../index';

describe('<Buttons />', () => {
  it('should render correctly', () => {
    const fakeProps = {
      active: '/work',
    };
    const wrapper = shallow(
      <Buttons {...fakeProps} />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render work button correctly', () => {
    const fakeProps = {
      location: {
        pathname: '/work',
      },
    };
    const wrapper = mount(
      <MemoryRouter>
        <Work {...fakeProps} />
      </MemoryRouter>
    );
    const button = wrapper.find('li').first();
    expect(toJson(button)).toMatchSnapshot();
  });

  it('should render graphics button correctly', () => {
    const fakeProps = {
      location: {
        pathname: '/work/graphics',
      },
    };
    const wrapper = mount(
      <MemoryRouter>
        <Work {...fakeProps} />
      </MemoryRouter>
    );
    const button = wrapper.find('li').last();
    expect(toJson(button)).toMatchSnapshot();
  });
});
