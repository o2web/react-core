// Libs
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { translateRoute } from 'o2web-react-core';
import Input from '../../forms/fields/input/Input';
import validate from '../../forms/validate/validate';

import actions from '../../../actions/user/';

// Styles
import './styles.scss';

class EditAccountForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
    updateAccount: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
  };

  static contextTypes = {
    t: PropTypes.func,
  };

  constructor() {
    super();
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(values) {
    const { updateAccount, history } = this.props;
    const { t } = this.context;

    updateAccount(values).then((data) => {
      if (data && data.updateAccount.user) {
        history.push(translateRoute('/en/account', t));
      }
    });
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    const { t } = this.context;

    const submitForm = handleSubmit(this.handleFormSubmit);

    return (
      <section className="section section--lined-background">
        <div className="wrapper wrapper--narrow">
          <h1 className="page__title" watermark={t('pages.editPassword.title')}>
            {t('pages.editPassword.title')}
          </h1>

          <form onSubmit={submitForm} className="form form--login">
            <Field
              name="currentPassword"
              component={Input}
              type="password"
              label="oldPassword"
            />
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
                {t('pages.editPassword.submit')}
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

EditAccountForm.propTypes = {
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
  form: 'updateAccount',
  enableReinitialize: true,
  validate,
})(EditAccountForm)));
