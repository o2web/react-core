const validate = values => {
  let errors = {};
  if (typeof values.firstName === 'undefined') {
    const firstNameError = { firstName: 'Field is required' };
    errors = Object.assign(errors, firstNameError);
  }
  return errors;
};

export default validate;
