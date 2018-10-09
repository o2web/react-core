export default {
  signIn: `
    mutation($email: String!, $password: String!) {
      signIn(email: $email, password: $password) {
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
