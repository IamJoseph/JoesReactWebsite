/*
 *
 * Contact
 *
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { submitStatus } from './selectors';
import { Container, H1Container, H1 } from './ContactStyled';
import Form from './Form';
import Links from './Links';
import { EMAIL_FORM } from './constants';

export class Contact extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      message: '',
      email: '',
      loading: false,
    };
  }

  componentWillReceiveProps() {
    this.setState({ name: '', message: '', email: '', loading: false });
  }

  // Reset message on page load
  greeting = () => {
    const { success } = this.props;
    if (success === null) {
      return 'Send an Email!';
    } else if (success) {
      return "Thanks, I'll Get Back to You Soon :)";
    }
    return 'Sorry There Was an Error :( Try again later?';
  }

  handleChange = (event, type) => {
    this.setState({ [type]: event.target.value });
  }

  handleSubmit = (event) => {
    const { name, message, email } = this.state;
    event.preventDefault();
    if (name && message && email) {
      this.setState({ loading: true });
      this.props.dispatch({ type: EMAIL_FORM, payload: this.state });
    }
  }

  render() {
    return (
      <Container>
        <Helmet>
          <title>Contact</title>
          <meta name="description" content="A contact form and different social media methods to contact Joseph Ireland" />
        </Helmet>
        <Links />
        <H1Container>
          <H1>{this.greeting()}</H1>
        </H1Container>
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          loading={this.state.loading}
          name={this.state.name}
          message={this.state.message}
          email={this.state.email}
        />
      </Container>
    );
  }
}

Contact.propTypes = {
  success: PropTypes.oneOf([true, false, null]),
  dispatch: PropTypes.func.isRequired,
};

Contact.defaultProps = {
  success: null,
};

const mapStateToProps = createStructuredSelector({
  success: submitStatus(),
});

export default connect(mapStateToProps)(Contact);
