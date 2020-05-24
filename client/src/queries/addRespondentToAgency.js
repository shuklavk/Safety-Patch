import gql from 'graphql-tag';

export default gql`
  mutation AddRespondentToAgency(
    $agencyName: String
    $firstName: String
    $lastName: String
    $address: String
    $city: String
    $state: String
    $primaryPhoneNumber: Int
    $email: String
    $verified: Boolean
  ) {
    addRespondentToAgency(
      agencyName: $agencyName
      firstName: $firstName
      lastName: $lastName
      address: $address
      city: $city
      state: $state
      primaryPhoneNumber: $primaryPhoneNumber
      email: $email
      verified: $verified
    ) {
      name
      respondents {
        firstName
        lastName
      }
    }
  }
`;
