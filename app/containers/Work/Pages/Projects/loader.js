/**
 * Asynchronously loads the components for WorkPage
 */

import { errorLoading } from 'utils/asyncInjectors';

export default () => (cb) => {
  import('containers/Work/Pages/Projects')
    .then(cb)
    .catch(errorLoading);
};
