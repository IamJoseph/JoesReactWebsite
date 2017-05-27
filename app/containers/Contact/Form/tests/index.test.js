import React from 'react';
import { shallow, mount } from 'enzyme';
import Form from '../index';
import { SubmitButton, Spinner, Circle } from '../FormStyled';

const fakeProps = {
  handleSubmit: () => {},
  handleChange: () => {},
};

describe('<Form />', () => {
  it('calls handleChange when name input changes', () => {
    const handleChangeSpy = jest.fn();
    const wrapper = mount(<Form {...fakeProps} handleChange={handleChangeSpy} />);
    wrapper.find('input').first().simulate('change', { target: { value: 'Alfred' } });
    expect(handleChangeSpy).toHaveBeenCalled();
  });

  it('calls handleChange when text area changes', () => {
    const handleChangeSpy = jest.fn();
    const wrapper = mount(<Form {...fakeProps} handleChange={handleChangeSpy} />);
    wrapper.find('textarea').simulate('change', { target: { value: 'This is a message' } });
    expect(handleChangeSpy).toHaveBeenCalled();
  });

  it('calls handleChange when email input changes', () => {
    const handleChangeSpy = jest.fn();
    const wrapper = mount(<Form {...fakeProps} handleChange={handleChangeSpy} />);
    wrapper.find('input').last().simulate('change', { target: { value: 'bruce@lee.com' } });
    expect(handleChangeSpy).toHaveBeenCalled();
  });

  describe('<SubmitButton />', () => {
    it('renders a button node', () => {
      const wrapper = shallow(
        <SubmitButton></SubmitButton>
      );
      expect(
        wrapper.find('button').node
      ).toBeDefined();
    });

    it('renders its children', () => {
      const text = 'Submit';
      const wrapper = shallow(
        <SubmitButton>{ text }</SubmitButton>
      );
      expect(
        wrapper.contains(text)
      ).toEqual(true);
    });

    it('blurs active button after click', () => {
      const wrapper = mount(<Form {...fakeProps} loading />);
      const spy = jest.spyOn(document.activeElement, 'blur');
      wrapper.find(SubmitButton).simulate('click');
      expect(spy).toHaveBeenCalled();
    });

    it('handles clicks', () => {
      const onClickSpy = jest.fn();
      const wrapper = shallow(<SubmitButton onClick={onClickSpy} />);
      wrapper.find('button').simulate('click');
      expect(onClickSpy).toHaveBeenCalled();
      expect(document.activeElement).not.toBe(wrapper);
    });

    let loading = false;
    const submitHandler = () => {
      if (loading) {
        return (
          <Spinner viewBox="0 0 66 66">
            <Circle
              fill="none"
              strokeWidth="6"
              strokeLinecap="round"
              cx="33"
              cy="33"
              r="30"
            />
          </Spinner>
        );
      }
      return <div style={{ width: '100%' }}>Send</div>;
    };

    it('should have div with Send if loading is false', () => {
      const button = mount(
        <SubmitButton>{ submitHandler() }</SubmitButton>
      );

      expect(button.contains(<div style={{ width: '100%' }}>Send</div>)).toEqual(true);
    });

    it('should have spinner if loading is true', () => {
      loading = true;
      const button = shallow(
        <SubmitButton>{ submitHandler() }</SubmitButton>
      );

      expect(button.contains(
        <Spinner viewBox="0 0 66 66">
          <Circle
            fill="none"
            strokeWidth="6"
            strokeLinecap="round"
            cx="33"
            cy="33"
            r="30"
          />
        </Spinner>
      )).toEqual(true);
    });
  });
});
