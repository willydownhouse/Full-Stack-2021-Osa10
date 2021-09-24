import { gql } from "@apollo/client";

export const authorize = gql`
  mutation authorize($credentials: AuthorizeInput) {
    authorize(credentials: $credentials) {
      accessToken
    }
  }
`;
export const createReview = gql`
  mutation createReview($review: CreateReviewInput) {
    createReview(review: $review) {
      user {
        username
      }
      text
      repository {
        id
      }
      createdAt
    }
  }
`;

export const createUser = gql`
  mutation createUser($user: CreateUserInput) {
    createUser(user: $user) {
      id
      username
      createdAt
    }
  }
`;
