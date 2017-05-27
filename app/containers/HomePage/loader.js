/**
 * Asynchronously loads the components for HomePage
 */

import { errorLoading, getAsyncInjectors } from 'utils/asyncInjectors';

export default (store) => {
  const { injectReducer, injectSagas } = getAsyncInjectors(store);
  return (cb) => {
    const importModules = Promise.all([
      import('containers/HomePage/Astronaut/reducer'),
      import('containers/HomePage/Astronaut/sagas'),
      import('containers/HomePage'),
    ]);

    importModules.then(([reducer, sagas, component]) => {
      injectReducer('home', reducer.default);
      injectSagas(sagas.default);

      cb(component);
    });

    importModules.catch(errorLoading);
  };
};
