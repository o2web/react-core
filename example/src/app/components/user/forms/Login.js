// Libs
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink, translateRoute } from 'o2web-react-core';
import Input from '../../forms/fields/input/Input';
import validate from '../../forms/validate/validate';


import actions from '../../../actions/user/';

// Styles
import './styles.scss';


// Login Form
class LoginForm extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
    authenticateUser: PropTypes.func.isRequired,
    authenticated: PropTypes.bool.isRequired,
  };

  static contextTypes = {
    t: PropTypes.func,
  };

  constructor() {
    super();
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentWillMount() {
    const { authenticated, history } = this.props;
    const { t } = this.context;
    window.scrollTo(0, 0);
    // login if authenticated
    if (authenticated) {
      history.push(translateRoute('/en/account', t));
    }
  }

  handleFormSubmit() {
    const { authenticateUser } = this.props;
    authenticateUser();
  }

  render() {
    const { t } = this.context;
    const { handleSubmit, pristine, submitting } = this.props;
    const submitForm = handleSubmit(this.handleFormSubmit);
    return (

      <section className="section section--lined-background login-page">
        <h1 className="page__title" watermark={t('pages.login.title')}>
          {t('pages.login.title')}
        </h1>

        <div className="columns columns--align-top">
          <div className="columns__column columns__column--half login-form ">
            <form onSubmit={submitForm} className="form">
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
              <div className="form__forgot-password-link">
                <NavLink to="en/account/forgotPassword">
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
              <NavLink to="en/account/createAccount">
                {t('pages.login.createAccount')}
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    );
  }
}


function mapStateToProps(state) {
  return {
    initialValues: {},
    authenticated: state.user.authenticated,
  };
}

export default withRouter(connect(mapStateToProps, actions)(reduxForm({
  form: 'login',
  enableReinitialize: true,
  validate,
}, mapStateToProps)(LoginForm)));
