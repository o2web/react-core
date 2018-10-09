import React from 'react';
import PropTypes from 'prop-types';

// Styles
import '../Fields.scss';
import './Textarea.scss';

function Textarea(field, { t }) {
  const originalError = field.meta.error;
  const errorTranslation = t(`form.${originalError}`);
  const error = errorTranslation === `form.${originalError}` ? originalError : errorTranslation;

  const showError = field.meta.touched && field.meta.error && !field.meta.disabled;

  return (
    <div className="field">
      {field.type}
      <label>
        <span className="field__label">{field.label ? t(`form.${field.label}`) : t(`form.${field.input.name}`)}</span>
        <textarea
          {...field.input}
          className="field__textarea"
          disabled={field.disabled}
          onKeyPress={field.onKeyPress}
          placeholder={field.placeholder}
        />
      </label>
      {showError && <span className="field__error">{error}</span>}
    </div>
  );
}

Textarea.contextTypes = {
  t: PropTypes.func,
};

export default Textarea;
