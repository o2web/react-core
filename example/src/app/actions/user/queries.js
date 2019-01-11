export default {
  signIn: `
    mutation($email: String!, $password: String!, $rememberMe: Boolean!) {
      signIn(email: $email, password: $password, rememberMe: $rememberMe) {
        user {
          email
        }
        errors {
          field
          message
        }
      }
    }
  `,
  signUp: `
    mutation($email: String!, $password: String!, $passwordConfirmation: String!) {
      signUp(email: $email, password: $password, passwordConfirmation: $passwordConfirmation) {
        user {
          email
        }
        errors {
          field
          message
        }
      }
    }
  `,
  forgotPassword: `
    mutation($email: String!) {
      forgotPassword(email: $email) {
        valid
      }
    }
  `,
  resetPassword: `
    mutation($token: String!, $password: String!, $passwordConfirmation: String!) {
      resetPassword(resetPasswordToken: $token, password: $password, passwordConfirmation: $passwordConfirmation) {
        valid
        errors {
          field
          message
        }
      }
    }
  `,
  updateAccount: `
    mutation($currentPassword: String!, $password: String!, $passwordConfirmation: String!) {
      updateAccount(currentPassword: $currentPassword, password: $password, passwordConfirmation: $passwordConfirmation) {
        user {
          email
        }
        errors {
          field
          message
        }
      }
    }
  `,
  validateToken: `
    mutation {
      validateToken {
        valid
        user {
          email
        }
      }
    }
  `,
};
