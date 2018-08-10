import React from 'react';
import PropTypes from 'prop-types';

// Styles
import '../Fields.scss';
import './Textarea.scss';

const Textarea = (field, { t }) => (
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
    {field.meta.touched && field.meta.error && !field.meta.disabled && <span className="field__error">{field.meta.error}</span>}
  </div>
);

Textarea.contextTypes = {
  t: PropTypes.func,
};

export default Textarea;
