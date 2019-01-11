// Libs
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'o2web-react-core';
import Input from '../../forms/fields/input/Input';
import Checkbox from '../../forms/fields/checkbox/Checkbox';
import validate from '../../forms/validate/validate';

import actions from '../../../actions/user/';

// Styles
// import './styles.scss';

// Login Form
class SignInForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
    signIn: PropTypes.func.isRequired,
    error: PropTypes.string,
  };

  static defaultProps = {
    error: '',
  };

  static contextTypes = {
    t: PropTypes.func,
  };

  constructor() {
    super();
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(values) {
    const { signIn } = this.props;
    signIn(values);
  }

  render() {
    const { t } = this.context;
    const { handleSubmit, pristine, submitting, error } = this.props;
    const submitForm = handleSubmit(this.handleFormSubmit);

    return (
      <section className="section section--lined-background login-page">
        <h1 className="page__title" watermark={t('pages.login.title')}>
          {t('pages.login.title')}
        </h1>

        <div className="columns columns--align-top">
          <div className="columns__column columns__column--half login-form">
            <form onSubmit={submitForm} className="form">
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
              <Checkbox
                name="rememberMe"
                component="input"
                type="checkbox"
              />
              <div className="form__forgot-password-link">
                <NavLink to="en/forgotPassword">
                  {t('pages.login.forgotPassword')}
                </NavLink>
              </div>
              <div className="form__actions">
                <button className="form__submit" type="submit" disabled={pristine || submitting}>
                  {t('pages.login.submit')}
                </button>
              </div>
            </form>
          </div>
          <div className="columns__column columns__column--half create-account">
            <h2 className="section__subtitle create-account__title">{t('pages.login.subtitle')}</h2>
            <p className="section__text create-account__text">{t('pages.login.text')}</p>
            <div className="create-account__button">
              <NavLink to="en/createAccount">
                {t('pages.login.createAccount')}
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps, actions)(reduxForm({
  form: 'signIn',
  initialValues: {
    rememberMe: false,
  },
  validate,
})(SignInForm));
