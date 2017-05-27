import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import { INITIAL_LOAD, SHOW_CARET, START_TYPING, SHOW_LETTER } from './constants';

/* eslint-disable no-plusplus */

export function* getHelmetText() {
  let count = 0;

  yield put({ type: INITIAL_LOAD, payload: false });

  while (count < 2) {
    yield put({ type: SHOW_CARET, payload: 1 });
    yield delay(450);
    yield put({ type: SHOW_CARET, payload: 0 });
    yield delay(450);
    count += 1;
  }

  for (let i = 1; i < 21; i++) {
    yield put({ type: SHOW_CARET, payload: i });
    yield delay(120);
    yield put({ type: SHOW_LETTER, payload: i });
    yield put({ type: SHOW_CARET, payload: 0 });
  }
  yield delay(3000);
  yield put({ type: SHOW_LETTER, payload: 0 });
}

export function* welcomeText() {
  yield takeEvery(START_TYPING, getHelmetText);
}

// Bootstrap sagas
export default [
  welcomeText,
];
