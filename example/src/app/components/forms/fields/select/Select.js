import React from 'react';
import PropTypes from 'prop-types';

// Styles
import '../Fields.scss';
import './Select.scss';

const Select = (field, { t }) => (
  <div className="field">
    <label className="field__label">{field.label ? t(`form.${field.label}`) : t(`form.${field.input.name}`)}</label>
    <select {...field.input} disabled={field.disabled} className="field__select">
      {field.children}
    </select>
    {field.meta.touched && field.meta.error && !field.meta.disabled && <span className="field__error">{t(`form.${field.meta.error}`)}</span>}
  </div>
);

Select.contextTypes = {
  t: PropTypes.func,
};

export default Select;
