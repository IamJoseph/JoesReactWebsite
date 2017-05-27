/**
 * Test store addons
 */

import { browserHistory } from 'react-router';
import toJson from 'enzyme-to-json';
import configureStore from '../store';

describe('configureStore', () => {
  let store;

  it('returns a store object', () => {
    store = configureStore();
    expect(typeof store).toBe('object');
    expect(toJson(store)).toMatchSnapshot();
  });

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  describe('asyncReducers', () => {
    it('should contain an object for async reducers', () => {
      expect(typeof store.asyncReducers).toBe('object');
    });
  });

  describe('runSaga', () => {
    it('should contain a hook for `sagaMiddleware.run`', () => {
      expect(typeof store.runSaga).toBe('function');
    });
  });
});
