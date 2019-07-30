import React from 'react';
import PropTypes from 'prop-types';

// Styles
// import '../Fields.scss';
// import './Input.scss';

function Input(field, { t }) {
  const originalError = field.meta.error;
  const errorTranslation = t(`form.${originalError}`);
  const error = errorTranslation === `form.${originalError}` ? originalError : errorTranslation;

  const showError = field.meta.touched && field.meta.error && !field.meta.disabled;

  return (
    <div className="field">
      <label>
        <span className="field__label">
          {field.label ? t(`form.${field.label}`) : t(`form.${field.input.name}`)}
        </span>
        <input
          {...field.input}
          className="field__input"
          type={field.type}
          disabled={field.disabled}
          onKeyPress={field.onKeyPress}
          placeholder={field.placeholder}
        />
      </label>
      {showError && <span className="field__error">{error}</span>}
    </div>
  );
}

Input.contextTypes = {
  t: PropTypes.func,
};

export default Input;
