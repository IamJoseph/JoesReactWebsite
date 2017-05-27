import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HelmetText } from '../HelmetText';

describe('<HelmetText/>', () => {
  let fakeProps = {
    letter: 0,
    caret: 0,
    initialLoad: true,
    dispatch: () => {},
  };

  it('renders correctly', () => {
    const wrapper = mount(<HelmetText {...fakeProps} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders correctly but without componentDidMount being successful', () => {
    fakeProps = {
      letter: 0,
      caret: 0,
      initialLoad: false,
      dispatch: () => {},
    };
    const wrapper = mount(<HelmetText {...fakeProps} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('handles dispatches during first load', () => {
    const spy = jest.fn();
    mount(<HelmetText {...fakeProps} initialLoad dispatch={spy} />);
    expect(spy).toHaveBeenCalled();
  });

  describe('with letter and caret props of 0', () => {
    const renderedComponent = shallow(<HelmetText {...fakeProps} />);
    it('renders a path', () => {
      expect(
        renderedComponent.find('path').node
      ).toBeDefined();
    });

    it('renders all letter and caret paths', () => {
      expect(
        renderedComponent.find('path')
      ).toHaveLength(38);
    });

    it('renders no fill when letter prop is 0', () => {
      expect(
        renderedComponent.find('path').first().props().fill
    ).toBe('none');
    });

    it('renders no fill when caret prop is 0', () => {
      expect(
        renderedComponent.find('path').last().props().fill
    ).toBe('none');
    });
  });

  describe('with letter and caret props > 0', () => {
    fakeProps = {
      letter: 1,
      caret: 19,
      initialLoad: true,
      dispatch: () => {},
    };
    const renderedComponent = shallow(<HelmetText {...fakeProps} />);

    it('renders letter path fill prop as #FFFFFF', () => {
      expect(
        renderedComponent.find('path').first().props().fill
      ).toBe('#FFFFFF');
    });

    it('renders letter path fill prop as #FFFFFF', () => {
      expect(
        renderedComponent.find('path').last().props().fill
      ).toBe('#FFFFFF');
    });
  });
});
