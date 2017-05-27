import { fromJS } from 'immutable';

import {
  submitStatus,
} from '../selectors';

describe('submitStatus', () => {
  const currentSubmitStatus = submitStatus();
  it('should return form result', () => {
    const result = true;
    const mockedState = fromJS({
      form: {
        success: result,
      },
    });
    expect(currentSubmitStatus(mockedState)).toEqual(result);
  });
});
