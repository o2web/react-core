import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from './fields/input/Input';
import Select from './fields/select/Select';
import Radio from './fields/radio/Radio';
import Checkbox from './fields/checkbox/Checkbox';
import Textarea from './fields/textarea/Textarea';
import validate from './validate/validate';

class DemoForm extends Component {
  static handleFormSubmit(values) {
    alert(JSON.stringify(values, null, 4));
  }

  render() {
    const { handleSubmit, pristine, submitting, reset } = this.props;
    const submitForm = handleSubmit(DemoForm.handleFormSubmit);

    return (
      <form onSubmit={submitForm} className="form--demo">
        <Field
          name="firstName"
          component={Input}
          type="text"
          placeholder="Your name..."
        />
        <Field
          name="lastName"
          component={Input}
          type="text"
          placeholder="Your last name..."
        />
        <div>
          <label>Sex</label>
          <div>
            <Radio
              name="sex"
              component="input"
              value="male"
              label="male"
              type="radio"
            />
            <Radio
              name="sex"
              component="input"
              value="female"
              label="female"
              type="radio"
            />
          </div>
        </div>
        <Field
          name="favoriteColor"
          component={Select}
        >
          <option />
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </Field>
        <div>
          <div>
            <Checkbox
              name="employed"
              id="employed"
              component="input"
              type="checkbox"
            />
          </div>
        </div>
        <Field
          name="notes"
          component={Textarea}
          placeholder="Enter text here..."
        />
        <div>
          <button type="submit" id="submit-form" disabled={pristine || submitting}>
            Submit
          </button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
        </div>
      </form>
    );
  }
}

DemoForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
};

function mapStateToProps() {
  return {
    initialValues: {
      sex: 'male',
      employed: true,
    },
  };
}

export default connect(mapStateToProps)(reduxForm({
  form: 'demo',
  enableReinitialize: true,
  validate,
})(DemoForm));
