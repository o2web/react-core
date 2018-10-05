// libs
import React from 'react';
import PropTypes from 'prop-types';

// components
import { NavLink } from 'o2web-react-core';

function NavLayout(props, { t }) {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/en">{t('nav.home')}</NavLink>
        </li>
        <li>
          <NavLink to="/en/about">{t('nav.about')}</NavLink>
        </li>
        <li>
          <NavLink to="/en/artworks">{t('nav.artworks')}</NavLink>
        </li>
        <li>
          <NavLink to="/en/demo">{t('nav.form_demo')}</NavLink>
        </li>
        <li>
          <NavLink to="/en/account">{t('nav.account')}</NavLink>
        </li>
      </ul>
    </nav>
  );
}

NavLayout.contextTypes = {
  t: PropTypes.func,
};

export default NavLayout;
