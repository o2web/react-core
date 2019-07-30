// libs
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

function Home(props, { t }) {
  return (
    <div>
      <Helmet>
        <title>Homepage</title>
        <meta name="description" content="Description - Homepage" />
        <meta property="og:title" content="Og - Homepage" />
        <meta name="og:description" content="OG - Homepage description" />
        <meta name="og:image" content="" />
        <meta name="twitter:title" content="twitter - Homepage title" />
        <meta name="twitter:description" content="twitter - Homepage description" />
        <meta name="twitter:image" content="" />
      </Helmet>
      <h2>{t('pages.titles.home')}</h2>
    </div>
  );
}

Home.contextTypes = {
  t: PropTypes.func,
};

export default Home;
