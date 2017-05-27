/**
 *
 * contact form selector
 *
 */

import { createSelector } from 'reselect';

const contactFormReducers = (state) => state.get('form');

export const submitStatus = () => createSelector(
  contactFormReducers,
  (arg) => arg.get('success')
);
