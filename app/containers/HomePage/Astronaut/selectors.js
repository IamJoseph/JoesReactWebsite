/**
 * takes one or more selectors, computes values and passes
 * as arguments to resultFunc
 *
 * createSelector uses reference equality (===) to determine
 * if value has changed so it's important that inputs be immutable.
 *
 * reducer imported in routes.js, uses async injector helper i.e. utils/asyncInjectors
 * and combined in reducers.js
 *
 */

import { createSelector } from 'reselect';
const homePageReducers = (state) => state.get('home');

export const caretTime = () => createSelector(
  homePageReducers,
  (arg) => arg.get('caret')
);

export const letterTime = () => createSelector(
  homePageReducers,
  (arg) => arg.get('letter')
);

export const initialLoad = () => createSelector(
  homePageReducers,
  (arg) => arg.get('initialLoad')
);
/* Alternate way of exporting selectors
 * see HelmetText.js mapStateToProps
*/
// export const caretTime = createSelector(
//   (state) => state.get('home'),
//   (arg) => arg.get('caret')
// );
