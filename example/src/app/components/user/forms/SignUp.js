// Libs
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'o2web-react-core';
import Input from '../../forms/fields/input/Input';
import validate from '../../forms/validate/validate';

import actions from '../../../actions/user/';

class SignUpForm extends Component {
  static contextTypes = {
    t: PropTypes.func,
  };

  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
    signUp: PropTypes.func.isRequired,
    error: PropTypes.string,
  };

  static defaultProps = {
    error: '',
  };

  constructor() {
    super();
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(values) {
    const { signUp } = this.props;
    signUp(values);
  }

  render() {
    const { t } = this.context;
    const { handleSubmit, pristine, submitting, error } = this.props;
    const submitForm = handleSubmit(this.handleFormSubmit);

    return (
      <section className="section section--lined-background">
        <div className="wrapper wrapper--narrow">
          <h1 className="page__title">
            {t('pages.createAccount.title')}
          </h1>

          <form onSubmit={submitForm} className="form form--login">
            {error && <div className="form-error">{error}</div>}
            <Field
              name="email"
              component={Input}
              type="email"
              label="email"
            />
            <Field
              name="password"
              component={Input}
              type="password"
              label="password"
            />
            <Field
              name="passwordConfirmation"
              component={Input}
              type="password"
              label="confirmPassword"
            />
            <div className="form__actions">
              <button className="form__submit" type="submit" disabled={pristine || submitting}>
                {t('pages.createAccount.submit')}
              </button>
            </div>
          </form>
          <NavLink to="en/login">
            {t('pages.login.submit')}
          </NavLink>
        </div>
      </section>
    );
  }
}

function mapStateToProps() {
  return {
    initialValues: {},
  };
}

export default connect(mapStateToProps, actions)(reduxForm({
  form: 'signUp',
  enableReinitialize: true,
  validate,
})(SignUpForm));
