import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

// Styles
// import '../Fields.scss';
// import './Radio.scss';

const Radio = (field, { t }) => (
  <div className="field">
    <label>
      <Field
        name={field.name}
        type="radio"
        component="input"
        value={field.value}
        onChange={field.onChange}
        disabled={field.disabled}
        className="field__radio"
      />
      <span className="field__radio__label">{field.label ? t(`form.${field.label}`) : t(`form.${field.name}`)}</span>
    </label>
  </div>
);

Radio.contextTypes = {
  t: PropTypes.func,
};

export default Radio;
