/**
 * Asynchronously loads the components for Contact
 */

import { errorLoading, getAsyncInjectors } from 'utils/asyncInjectors';

export default (store) => {
  const { injectReducer, injectSagas } = getAsyncInjectors(store);
  return (cb) => {
    const importModules = Promise.all([
      import('containers/Contact/reducer'),
      import('containers/Contact/sagas'),
      import('containers/Contact'),
    ]);

    importModules.then(([reducer, sagas, component]) => {
      injectReducer('form', reducer.default);
      injectSagas(sagas.default);
      cb(component);
    });

    importModules.catch(errorLoading);
  };
};
