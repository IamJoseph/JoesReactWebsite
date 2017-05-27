import React from 'react';
import { shallow } from 'enzyme';
import App from '../index';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Routes from '../../../routes';

const children = (<h1>Test</h1>);
const fakeProps = {
  store: {},
};

describe('<App />', () => {
  const wrapper = shallow(
    <App {...fakeProps}>
      {children}
    </App>
  );
  it('should render the header', () => {
    expect(wrapper.find(Header).length).toBe(1);
  });

  it('should render routes', () => {
    expect(wrapper.find(Routes).length).toBe(1);
  });

  it('should render the footer', () => {
    expect(wrapper.find(Footer).length).toBe(1);
  });
});
