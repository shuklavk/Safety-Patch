import gql from 'graphql-tag';

export default gql`
  {
    hotels {
      id
      name
      address
      city
      state
      zipcode
      phoneNumber
      email
      promoCode
      image
    }
  }
`;
