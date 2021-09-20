import { gql } from "@apollo/client";

export const authorize = gql`
  mutation authorize($credentials: AuthorizeInput) {
    authorize(credentials: $credentials) {
      accessToken
    }
  }
`;

//authorize(credentials: AuthorizeInput): AuthorizationPayload
