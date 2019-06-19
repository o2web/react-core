// libs
import React from 'react';
import PropTypes from 'prop-types';

function Home(props, { t }) {
  return (
    <div>
      <h2>{t('pages.titles.notFound')}</h2>
    </div>
  );
}

Home.contextTypes = {
  t: PropTypes.func,
};

export default Home;
