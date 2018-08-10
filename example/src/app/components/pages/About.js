// libs
import React from 'react';
import PropTypes from 'prop-types';

function About(pros, { t }) {
  return (
    <div>
      <h2>{t('pages.titles.about')}</h2>
    </div>
  );
}

About.contextTypes = {
  t: PropTypes.func,
};

export default About;
