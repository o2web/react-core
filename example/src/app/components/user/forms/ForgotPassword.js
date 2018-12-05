// Libs
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'o2web-react-core';
import Input from '../../forms/fields/input/Input';
import validate from '../../forms/validate/validate';

import actions from '../../../actions/user/';

// Styles
// import './styles.scss';

class ForgotPasswordForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
    forgotPassword: PropTypes.func.isRequired,
  };

  static contextTypes = {
    t: PropTypes.func,
  };

  constructor() {
    super();
    this.state = { resetInstructionsSent: false };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(values) {
    const { forgotPassword } = this.props;
    forgotPassword(values).then((data) => {
      if (data && data.forgotPassword.valid) {
        this.setState({ resetInstructionsSent: true });
      }
    });
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    const { resetInstructionsSent } = this.state;
    const { t } = this.context;

    const submitForm = handleSubmit(this.handleFormSubmit);

    return (
      <section className="section section--lined-background">
        <div className="wrapper wrapper--narrow">
          <h1 className="page__title" watermark={t('pages.login.title')}>
            {t('pages.forgotPassword.title')}
          </h1>

          { resetInstructionsSent ?
            <p>{t('pages.forgotPassword.instructionsSent')}</p>
            :
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
          }

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

export default withRouter(connect(mapStateToProps, actions)(reduxForm({
  form: 'forgotPassword',
  enableReinitialize: true,
  validate,
})(ForgotPasswordForm)));
