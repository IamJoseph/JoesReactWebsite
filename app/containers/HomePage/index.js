/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Astronaut from './Astronaut';
import Text from './Text';
import Transition from './HomePageStyled';

export default class HomePage extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Transition
        component="div"
        className="transition-group"
        transitionName="page"
        transitionEnterTimeout={3000}
        transitionLeave={false}
        transitionAppear
        transitionAppearTimeout={3000}
      >
        <Helmet>
          <title>Joe Ireland</title>
          <meta name="description" content="Homepage portfolio website of software and web developer Joseph Ireland" />
          <script type="application/ld+json">
            {`
              {
                  "@context": "http://schema.org",
                  "@type": "Person",
                  "name": "Joseph Ireland",
                  "jobTitle": "Web Engineer",
                  "url": "https://www.joeireland.com",
                  "description": "Homepage portfolio website of software and web developer Joseph Ireland"
              }
            `}
          </script>
        </Helmet>
        <Astronaut />
        <Text />
      </Transition>
    );
  }
}
