import { graphql } from "react-relay";

export const UsersQuery = graphql`
  query UsersQuery($results: Int!, $nat: String!) {
    users(results: $results, nat: $nat) {
      gender
      name {
        last
      }
      dob {
        age
      }
      location {
        state
      }
      nat
    }
  }
`;
