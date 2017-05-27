import { takeEvery, put } from 'redux-saga/effects';
import { createMockTask } from 'redux-saga/utils';
import { INITIAL_LOAD, SHOW_CARET, START_TYPING, SHOW_LETTER } from '../constants';
import { welcomeText, getHelmetText } from '../sagas';

/* eslint-disable redux-saga/yield-effects */
/* eslint-disable no-plusplus */

describe('welcomeText', () => {
  const saga = welcomeText();

  it('should start task to watch for START_TYPING action', () => {
    expect(
      saga.next().value
    ).toEqual(
      takeEvery(START_TYPING, getHelmetText));
  });
});

describe('getHelmetText', () => {
  const saga = getHelmetText();

  it('will put INITIAL_LOAD to false', () => {
    expect(
      saga.next().value
    ).toEqual(
      put({ type: INITIAL_LOAD, payload: false })
    );
  });

  describe('while count < 2', () => {
    let count = 0;
    while (count < 2) {
      it('will put SHOW_CARET with payload of 1', () => {
        expect(
          saga.next().value
        ).toEqual(
          put({ type: SHOW_CARET, payload: 1 })
        );
      });

      it('will put SHOW_CARET with payload of 0', () => {
        let fakeTask = createMockTask();
        saga.next(fakeTask);
        expect(
          saga.next().value
        ).toEqual(
          put({ type: SHOW_CARET, payload: 0 })
        );
        fakeTask = createMockTask();
        saga.next(fakeTask);
      });
      count += 1;
    }
  });
  describe('while count > 2', () => {
    for (let i = 1; i < 21; i++) {
      it(`will put SHOW_CARET with payload of ${i}`, () => {
        expect(
          saga.next().value
        ).toEqual(
          put({ type: SHOW_CARET, payload: i })
        );
      });

      it(`will put SHOW_LETTER with payload of ${i}`, () => {
        const fakeTask = createMockTask();
        saga.next(fakeTask);
        expect(
          saga.next().value
        ).toEqual(
          put({ type: SHOW_LETTER, payload: i })
        );
      });

      it('will reset SHOW_CARET with payload of 0', () => {
        expect(
          saga.next().value
        ).toEqual(
          put({ type: SHOW_CARET, payload: 0 })
        );
      });
    }

    it('will at last reset SHOW_LETTER with payload of 0', () => {
      const fakeTask = createMockTask();
      saga.next(fakeTask);
      expect(
        saga.next().value
      ).toEqual(
        put({ type: SHOW_LETTER, payload: 0 })
      );
    });
  });
});
