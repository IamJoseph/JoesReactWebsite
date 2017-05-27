import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import toJson from 'enzyme-to-json';
import { Contact } from '../index';
import Form from '../Form';

let fakeProps = {
  dispatch: () => {},
};
describe('<Contact {...fakeProps} />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Contact {...fakeProps} />);
    wrapper.setProps({ success: null });
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.setProps({ success: true });
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.setProps({ success: false });
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should update state with changes via handleChange', () => {
    const wrapper = mount(<Contact {...fakeProps} />);
    wrapper.find(Form).find('textarea').simulate('change', { target: { value: 'This is a message' } });
    expect(wrapper.state('message')).toBe('This is a message');
  });

  it('handles the form submit', () => {
    const spy = jest.fn();
    const wrapper = mount(<Contact dispatch={spy} />);
    wrapper.setState({
      name: 'me',
      message: 'message',
      email: 'ok@whatever.com',
      loading: false,
    });
    wrapper.find(Form).simulate('submit');
    expect(spy).toHaveBeenCalled();
  });

  it('does not submit when the form is incomplete', () => {
    const spy = jest.fn();
    const wrapper = mount(<Contact dispatch={spy} />);
    wrapper.setState({
      name: 'me',
      message: '',
      email: 'ok@whatever.com',
      loading: false,
    });
    wrapper.find(Form).simulate('submit');
    expect(spy).not.toHaveBeenCalled();
  });

  it('calls componentWillReceiveProps and sets state', () => {
    const wrapper = mount(
      <Contact {...fakeProps} />
    );
    const fakeInitialState = {
      name: '',
      message: '',
      email: '',
      loading: false,
    };
    const spy = sinon.spy(Contact.prototype, 'componentWillReceiveProps');
    expect(Contact.prototype.componentWillReceiveProps.called).toBe(false);
    wrapper.setProps({ fake: 'prop' });
    expect(Contact.prototype.componentWillReceiveProps.called).toBe(true);
    expect(wrapper.state()).toEqual(fakeInitialState);
    spy.reset();
  });

  it('should call handleSubmit when form is submited', () => {
    fakeProps = {
      handleChange: () => {},
    };
    const onSubmitSpy = jest.fn();
    const formComponent = mount(<Form {...fakeProps} handleSubmit={onSubmitSpy} />);
    formComponent.simulate('submit');
    expect(onSubmitSpy).toHaveBeenCalled();
  });
});
