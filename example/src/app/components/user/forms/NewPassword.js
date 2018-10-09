// Libs
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../../forms/fields/input/Input';
import validate from '../../forms/validate/validate';

// Styles
import './styles.scss';


// Edit Password Form
class NewPasswordForm extends Component {
  static contextTypes = {
    t: PropTypes.func,
  };
  static handleFormSubmit(values) {
    alert(JSON.stringify(values, null, 4));
  }

  render() {
    const { t } = this.context;
    const { handleSubmit, pristine, submitting } = this.props;
    const submitForm = handleSubmit(NewPasswordForm.handleFormSubmit);

    return (
      <section className="section section--lined-background">
        <div className="wrapper wrapper--narrow">
          <h1 className="page__title" watermark={t('pages.newPassword.title')}>
            {t('pages.newPassword.title')}
          </h1>

          <form onSubmit={submitForm} className="form form--login">
            <Field
              name="newPassword"
              component={Input}
              type="password"
              label="newPassword"
            />
            <Field
              name="confirmNewPassword"
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
        </div>
      </section>
    );
  }
}

NewPasswordForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

function mapStateToProps() {
  return {
    initialValues: {},
  };
}

export default connect(mapStateToProps)(reduxForm({
  form: 'newPassword',
  enableReinitialize: true,
  validate,
}, mapStateToProps)(NewPasswordForm));
