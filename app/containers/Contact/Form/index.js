import React from 'react';
import PropTypes from 'prop-types';
import { Form, FieldSet, Input, TextArea, SubmitButton, Spinner, Circle } from './FormStyled';

export default function FormComponent(props) {
  const { handleSubmit, handleChange, loading, name, message, email } = props;

  const submitHandler = () => {
    if (loading) {
      return (
        <Spinner viewBox="0 0 66 66">
          <Circle
            fill="none"
            strokeWidth="6"
            strokeLinecap="round"
            cx="33"
            cy="33"
            r="30"
          />
        </Spinner>
      );
    }
    return <div style={{ width: '100%' }}>Send</div>;
  };

  return (
    <Form
      method="POST"
      onSubmit={handleSubmit}
      encType="text/plain"
    >
      <label htmlFor="name">Name: </label>
      <FieldSet halfWidth>
        <Input
          id="name"
          name="name"
          placeholder="Optimus Prime"
          required
          value={name}
          onChange={(e) => handleChange(e, 'name')}
        />
      </FieldSet>
      <label htmlFor="message">Message: </label>
      <FieldSet>
        <TextArea
          id="message"
          name="message"
          required
          rows="10"
          value={message}
          placeholder="Your message"
          onChange={(e) => handleChange(e, 'message')}
        >
        </TextArea>
      </FieldSet>
      <label htmlFor="email"><em>Your</em> Email Address: </label>
      <FieldSet halfWidth>
        <Input
          id="email"
          name="email"
          type="email"
          value={email}
          required
          placeholder="your.name@email.com"
          onChange={(e) => handleChange(e, 'email')}
        />
      </FieldSet>
      <SubmitButton
        className={loading && 'loading'}
        onClick={() => { document.activeElement.blur(); }}
      >
        { submitHandler() }
      </SubmitButton>
    </Form>
  );
}

FormComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

FormComponent.defaultProps = {
  loading: false,
  name: '',
  message: '',
  email: '',
};
