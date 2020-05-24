import gql from 'graphql-tag';

export default gql`
  {
    respondents(id: "5eca2e5a08a8b2219e16d4af") {
      id
      firstName
      lastName
      address
      city
      state
      primaryPhoneNumber
      email
      verified
    }
  }
`;
