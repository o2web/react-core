// Libs
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Input from '../../forms/fields/input/Input';
import validate from '../../forms/validate/validate';

import actions from '../../../actions/user/';

// Styles
import './styles.scss';

class ResetPasswordForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
    resetPassword: PropTypes.func.isRequired,
    error: PropTypes.string,
    match: PropTypes.object.isRequired,
  };

  static defaultProps = {
    error: '',
  };

  static contextTypes = {
    t: PropTypes.func,
  };

  constructor() {
    super();
    this.state = { passwordWasReset: false };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(values) {
    const { resetPassword, match: { params: { token } } } = this.props;

    resetPassword({ ...values, token }).then((data) => {
      if (data && data.resetPassword.valid) {
        this.setState({ passwordWasReset: true });
      }
    });
  }

  render() {
    const { handleSubmit, pristine, submitting, error } = this.props;
    const { passwordWasReset } = this.state;
    const { t } = this.context;
    const submitForm = handleSubmit(this.handleFormSubmit);

    return (
      <section className="section section--lined-background">
        <div className="wrapper wrapper--narrow">
          <h1 className="page__title" watermark={t('pages.newPassword.title')}>
            {t('pages.newPassword.title')}
          </h1>

          { passwordWasReset ?
            <p>{t('pages.newPassword.passwordWasReset')}</p>
            :
            <form onSubmit={submitForm} className="form form--login">
              {error && <div className="form-error">{error}</div>}
              <Field
                name="password"
                component={Input}
                type="password"
                label="newPassword"
              />
              <Field
                name="passwordConfirmation"
                component={Input}
                type="password"
                label="confirmPassword"
              />
              <div className="form__actions">
                <button className="form__submit" type="submit" disabled={pristine || submitting}>
                  {t('pages.newPassword.submit')}
                </button>
              </div>
            </form>
          }
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

export default withRouter(connect(mapStateToProps, actions)(reduxForm({
  form: 'resetPassword',
  enableReinitialize: true,
  validate,
}, mapStateToProps)(ResetPasswordForm)));
