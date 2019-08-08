import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

// Styles
import '../Fields.scss';
import './Checkbox.scss';

const Checkbox = (field, { t }) => (
  <div className="field">
    <label>
      <Field
        name={field.name}
        type="checkbox"
        component="input"
        value={field.value}
        onChange={field.onChange}
        disabled={field.disabled}
        className="field__checkbox"
      />
      <span className="field__checkbox__label">{field.label ? t(`form.${field.label}`) : t(`form.${field.name}`)}</span>
    </label>
  </div>
);

Checkbox.contextTypes = {
  t: PropTypes.func,
};

export default Checkbox;
