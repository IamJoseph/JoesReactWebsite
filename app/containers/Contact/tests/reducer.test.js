import { fromJS } from 'immutable';
import reducer from '../reducer';
import { SUBMIT_SUCCESS, SUBMIT_FAILURE } from '../constants';

describe('formReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      success: null,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(reducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle SUBMIT_SUCCESS correctly', () => {
    const expectedResult = state
      .set('success', true);

    expect(reducer(state, { type: SUBMIT_SUCCESS })).toEqual(expectedResult);
  });

  it('should handle SUBMIT_FAILURE correctly', () => {
    const expectedResult = state
      .set('success', false);

    expect(reducer(state, { type: SUBMIT_FAILURE })).toEqual(expectedResult);
  });
});
