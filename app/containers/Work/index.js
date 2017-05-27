/*
 *
 * Work
 *
 */

import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';
import { Container, PageContainer } from './WorkStyled';
import Buttons from './Buttons';
import AsyncRoute from '../../routing/AsyncRoute';
import currentLoader from './Pages/Current/loader';
import clientLoader from './Pages/Client/loader';
import graphicsLoader from './Pages/Graphics/loader';
import defaultLoader from './Pages/Default/loader';
import projectsLoader from './Pages/Projects/loader';

export default class Work extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  getSubRouteContent = (path) => {
    const { store } = this.context;
    switch (path) {
      case '/work/current_site':
        return currentLoader(store);
      case '/work/client_sites':
        return clientLoader(store);
      case '/work/projects':
        return projectsLoader(store);
      case '/work/graphics':
        return graphicsLoader(store);
      default:
      case '/work':
        return defaultLoader(store);
    }
  }

  render() {
    const { pathname } = this.props.location;
    return (
      <Container>
        <Helmet>
          <title>Work</title>
          <meta name="description" content="Past employment, projects, skills" />
        </Helmet>
        <Buttons active={pathname} />
        <PageContainer
          component="div"
          className="transition-group"
          transitionName="page"
          transitionEnterTimeout={2000}
          transitionLeave={false}
          transitionAppear
          transitionAppearTimeout={2000}
        >
          {/* transition needs rendered element on pageload */}
          <div style={{ width: '100%', height: '100%' }}>
            <Switch>
              <AsyncRoute path={pathname} load={this.getSubRouteContent(pathname)} />
            </Switch>
          </div>
        </PageContainer>
      </Container>
    );
  }
}

Work.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

Work.defaultProps = {
  location: {
    pathname: '',
  },
};

Work.contextTypes = {
  store: PropTypes.object,
};
