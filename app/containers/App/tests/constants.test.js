import { DEFAULT_LOCALE } from '../constants';

describe('<App />', () => {
  it('should default to en', () => {
    const expectedValue = 'en';
    expect(DEFAULT_LOCALE).toBe(expectedValue);
  });
});
