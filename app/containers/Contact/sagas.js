import { call, put, take, takeEvery, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { EMAIL_FORM, SUBMIT_SUCCESS, SUBMIT_FAILURE } from './constants';

export const formSubmit = ({ name, message, email }) => {
  const formData = new FormData();
  formData.append('name', name);
  formData.append('message', message);
  formData.append('email', email);

  return fetch('cgiPython.py', {
    method: 'POST',
    body: formData,
  }).then((response) => {
    return response.status;
  });
};

export function* processForm(action) {
  try {
    const submit = yield call(formSubmit, action.payload);
    if (submit === 200) {
      yield put({ type: SUBMIT_SUCCESS });
    } else {
      throw (submit);
    }
  } catch (error) {
    yield put({ type: SUBMIT_FAILURE });
    throw (new Error(error));
  }
}

export function* sendForm() {
  const process = yield takeEvery(EMAIL_FORM, processForm);
  yield take(LOCATION_CHANGE);
  yield cancel(process);
}

// Bootstrap sagas
export default [
  sendForm,
];
