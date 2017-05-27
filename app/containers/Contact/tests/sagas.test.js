import { call, put, take, takeEvery, cancel } from 'redux-saga/effects';
import { createMockTask } from 'redux-saga/utils';
import { LOCATION_CHANGE } from 'react-router-redux';
import { sendForm, processForm, formSubmit } from '../sagas';
import { EMAIL_FORM, SUBMIT_SUCCESS, SUBMIT_FAILURE } from '../constants';

/* eslint-disable redux-saga/yield-effects */
/* eslint-disable func-names */

const form = {
  type: EMAIL_FORM,
  payload: {
    name: '',
    message: '',
    email: '',
    loading: false,
  },
};

describe('sendForm saga', () => {
  const saga = sendForm();
  it('should wait for email form', () => {
    expect(
      saga.next().value
    ).toEqual(
      takeEvery(EMAIL_FORM, processForm)
    );
  });

  const fakeTask = createMockTask();
  it('should wait for location change next', () => {
    expect(
      saga.next(fakeTask).value
    ).toEqual(
      take(LOCATION_CHANGE)
    );
  });

  it('should cancel process with location change', () => {
    expect(
      saga.next(LOCATION_CHANGE).value
    ).toEqual(
      cancel(fakeTask)
    );
  });

  it('should be finished', () => {
    expect(
      saga.next().done
    ).toBe(
      true
    );
  });
});

describe('processForm saga', () => {
  let saga = processForm(form);
  it('should wait for submited form', () => {
    expect(
      saga.next().value
    ).toEqual(
      call(formSubmit, form.payload)
    );
  });

  it('will put SUBMIT_SUCCESS if return value is 200', () => {
    expect(
      saga.next(200).value
    ).toEqual(
      put({ type: SUBMIT_SUCCESS })
    );
  });

  it('will put SUBMIT_FAILURE if return value is not 200', () => {
    saga = processForm(form);
    saga.next();
    expect(
      saga.next(404).value
    ).toEqual(
      put({ type: SUBMIT_FAILURE })
    );
  });

  it('will put throw error if return value is not 200', () => {
    saga = processForm(form);
    saga.next();
    saga.next('not 200');
    expect(() => {
      saga.next();
    }).toThrow();
  });
});


describe('formSubmit function', () => {
  it('should accept status as return', async () => {
    global.fetch = jest.fn().mockImplementation(() => {
      const p = new Promise((resolve) => {
        resolve({
          status: 200,
        });
      });
      return p;
    });
    const func = await formSubmit(form);
    expect(func).toEqual(200);
  });

  it('should not accept other values as return', async () => {
    global.fetch = jest.fn().mockImplementation(() => {
      const p = new Promise((resolve) => {
        resolve({
          ok: 200,
        });
      });
      return p;
    });
    const func = await formSubmit(form);
    expect(func).toBeUndefined();
  });
});
