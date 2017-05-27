import { fromJS } from 'immutable';

import {
  caretTime,
  letterTime,
  initialLoad,
} from '../selectors';

describe('initialLoad', () => {
  const initialLoadStatus = initialLoad();
  it('should equal mocked initialLoad prop', () => {
    const result = true;
    const mockedState = fromJS({
      home: {
        initialLoad: result,
      },
    });
    expect(initialLoadStatus(mockedState)).toEqual(result);
  });
});

describe('caretTime', () => {
  const caretTimeStatus = caretTime();
  it('should equal mocked caret prop', () => {
    const result = 0;
    const mockedState = fromJS({
      home: {
        caret: result,
      },
    });
    expect(caretTimeStatus(mockedState)).toEqual(result);
  });
});

describe('letterTime', () => {
  const letterTimeStatus = letterTime();
  it('should equal mocked letter prop', () => {
    const result = 0;
    const mockedState = fromJS({
      home: {
        letter: result,
      },
    });
    expect(letterTimeStatus(mockedState)).toEqual(result);
  });
});
