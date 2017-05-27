/*
 * Contact Form Reducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 */
import { fromJS } from 'immutable';

import {
  SUBMIT_SUCCESS,
  SUBMIT_FAILURE,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  success: null,
});

function formReducer(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_SUCCESS:
      return state
        .set('success', true);
    case SUBMIT_FAILURE:
      return state
        .set('success', false);
    default:
      return initialState;
  }
}

export default formReducer;
