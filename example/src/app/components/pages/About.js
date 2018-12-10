// libs
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

function About(pros, { t }) {
  return (
    <div>
      <Helmet>
        <title>À propos</title>
        <meta name="description" content="Description - Page à propos" />
        <meta property="og:title" content="Og - À propos" />
        <meta name="og:description" content="OG - À propos description" />
        <meta name="og:image" content="" />
        <meta name="twitter:title" content="twitter - À Propos title" />
        <meta name="twitter:description" content="twitter - À Propos description" />
        <meta name="twitter:image" content="" />
      </Helmet>
      <h2>{t('pages.titles.about')}</h2>
    </div>
  );
}

About.contextTypes = {
  t: PropTypes.func,
};

export default About;
