import React from 'react';
import PropTypes from 'prop-types';

// Styles
// import '../Fields.scss';
// import './Select.scss';

function Select(field, { t }) {
  const originalError = field.meta.error;
  const errorTranslation = t(`form.${originalError}`);
  const error = errorTranslation === `form.${originalError}` ? originalError : errorTranslation;

  const showError = field.meta.touched && field.meta.error && !field.meta.disabled;

  return (
    <div className="field">
      <label className="field__label">{field.label ? t(`form.${field.label}`) : t(`form.${field.input.name}`)}</label>
      <select {...field.input} disabled={field.disabled} className="field__select">
        {field.children}
      </select>
      {showError && <span className="field__error">{error}</span>}
    </div>
  );
}

Select.contextTypes = {
  t: PropTypes.func,
};

export default Select;
