// libs
import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'o2web-react-core';

// Actions
import actions from '../../../actions/user';

// Styles
import './styles.scss';

function MyAccount({ email, signOut }, { t }) {
  const userName = email.split('@').join('\u200b@');

  return (
    <section className="my-account section section--lined-background">
      <div className="wrapper wrapper--narrow">
        <h1 className="page__title my-account__name">
          {userName}
        </h1>

        <div className="my-account__info">
          <h2 className="section__subtitle">{t('pages.account.userInfo')}</h2>
          <dl className="info">
            <dt className="info__label">{t('form.email')}</dt>
            <dd className="info__data info__email">{email}</dd>

            <dt className="info__label">{t('form.password')}</dt>
            <dd className="info__data info__password">•••••••</dd>
          </dl>

          <div className="my-account__actions">
            <div className="my-account__action my-account__action--change-password">
              <NavLink to="en/account/editPassword">
                {t('pages.account.changePassword')}
              </NavLink>
            </div>
            <div className="my-account__action my-account__action--logout">
              <button type="button" onClick={signOut}>
                {t('pages.account.logout')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

MyAccount.propTypes = {
  signOut: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};

MyAccount.contextTypes = {
  t: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    authenticated: state.user.authenticated,
    id: state.user.id,
    email: state.user.data.email,
  };
}

export default withRouter(connect(mapStateToProps, actions)(MyAccount));
