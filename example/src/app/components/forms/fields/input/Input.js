import React from 'react';
import PropTypes from 'prop-types';

// Styles
import '../Fields.scss';
import './Input.scss';

const Input = (field, { t }) => (
  <div className="field">
    <label>
      <span className="field__label">{field.label ? t(`form.${field.label}`) : t(`form.${field.input.name}`)}</span>
      <input
        {...field.input}
        className="field__input"
        type={field.type}
        disabled={field.disabled}
        onKeyPress={field.onKeyPress}
        placeholder={field.placeholder}
      />
    </label>
    {field.meta.touched && field.meta.error && !field.meta.disabled && <span className="field__error">{t(`form.${field.meta.error}`)}</span>}
  </div>
);

Input.contextTypes = {
  t: PropTypes.func,
};

export default Input;
