/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Routes from '../../routes';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// export default class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
export default function App({ store }) { // eslint-disable-line react/prefer-stateless-function
  return (
    <div>
      <Header />
      <div className="globalContainer">
        <Routes store={store} />
      </div>
      <Footer />
    </div>
  );
}

App.propTypes = {
  store: PropTypes.object.isRequired,
};
