/**
 * Asynchronously loads the components for WorkPage
 */

import { errorLoading } from 'utils/asyncInjectors';

export default () => (cb) => {
  import('containers/Work')
    .then(cb)
    .catch(errorLoading);
};
