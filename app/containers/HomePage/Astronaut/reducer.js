/*
 * AstronautReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  INITIAL_LOAD,
  SHOW_CARET,
  SHOW_LETTER,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  caret: 0,
  letter: 0,
  initialLoad: true,
});

function pathReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_CARET:
      return state
        .set('caret', action.payload);
    case SHOW_LETTER:
      return state
        .set('letter', action.payload);
    case INITIAL_LOAD:
      return state
        .set('initialLoad', action.payload);
    default:
      return state;
  }
}

export default pathReducer;
