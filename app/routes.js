// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business

import React from 'react';
import { Switch } from 'react-router';
import PropTypes from 'prop-types';
import AsyncRoute from './routing/AsyncRoute';
import HomePage from './containers/HomePage/loader';
import WorkPage from './containers/Work/loader';
import ContactPage from './containers/Contact/loader';
import NotFoundPage from './containers/NotFoundPage/loader';

const Routes = ({ store }) => (
  <Switch>
    <AsyncRoute
      exact path="/" load={HomePage(store)}
    />
    <AsyncRoute
      path="/work" load={WorkPage(store)}
    />
    <AsyncRoute
      exact path="/contact" load={ContactPage(store)}
    />
    <AsyncRoute
      exact path="" load={NotFoundPage(store)}
    />
  </Switch>
);

Routes.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Routes;
