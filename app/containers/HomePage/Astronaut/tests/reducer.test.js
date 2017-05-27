import { fromJS } from 'immutable';
import reducer from '../reducer';
import {
  INITIAL_LOAD,
  SHOW_CARET,
  SHOW_LETTER,
} from '../constants';

describe('formReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      caret: 0,
      letter: 0,
      initialLoad: true,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(reducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle SHOW_CARET correctly', () => {
    const expectedResult = state
      .set('caret', 1);

    expect(reducer(state, { type: SHOW_CARET, payload: 1 })).toEqual(expectedResult);
  });

  it('should handle SHOW_LETTER correctly', () => {
    const expectedResult = state
      .set('letter', 1);

    expect(reducer(state, { type: SHOW_LETTER, payload: 1 })).toEqual(expectedResult);
  });

  it('should handle INITIAL_LOAD correctly', () => {
    const expectedResult = state
      .set('initialLoad', false);

    expect(reducer(state, { type: INITIAL_LOAD, payload: false })).toEqual(expectedResult);
  });
});
