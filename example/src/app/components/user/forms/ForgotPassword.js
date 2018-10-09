// Libs
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink, translateRoute } from 'o2web-react-core';
import Input from '../../forms/fields/input/Input';
import validate from '../../forms/validate/validate';

// Styles
import './styles.scss';


// Login Form
class ForgotPasswordForm extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
  };

  static contextTypes = {
    t: PropTypes.func,
  };

  constructor() {
    super();
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit() {
    const { history } = this.props;
    const { t } = this.context;
    history.push(translateRoute('/en/account/newPassword', t));
  }

  render() {
    const { t } = this.context;
    const { handleSubmit, pristine, submitting } = this.props;
    const submitForm = handleSubmit(this.handleFormSubmit);

    return (
      <section className="section section--lined-background">
        <div className="wrapper wrapper--narrow">
          <h1 className="page__title" watermark={t('pages.login.title')}>
            {t('pages.forgotPassword.title')}
          </h1>

          <form onSubmit={submitForm} className="form form--login">
            <Field
              name="email"
              component={Input}
              type="email"
              label="email"
            />
            <div className="form__actions">
              <button className="form__submit" type="submit" disabled={pristine || submitting}>
                {t('pages.forgotPassword.submit')}
              </button>
            </div>
          </form>

          <p className="section__text">
            {t('pages.forgotPassword.text')}
          </p>

          <NavLink to="en/login">
            {t('pages.login.submit')}
          </NavLink>
        </div>
      </section>
    );
  }
}

ForgotPasswordForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

function mapStateToProps() {
  return {
    initialValues: {},
  };
}

export default withRouter(connect(mapStateToProps)(reduxForm({
  form: 'forgotPassword',
  enableReinitialize: true,
  validate,
})(ForgotPasswordForm)));
