import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query GET_REPOSITORIES {
    repositories {
      edges {
        node {
          id
          ownerAvatarUrl
          fullName
          description
          language
          forksCount
          stargazersCount
          ratingAverage
          reviewCount
        }
      }
    }
  }
`;

export const AUTHORIZED_USER = gql`
  query AUTHORIZED_USER {
    authorizedUser {
      id
      username
    }
  }
`;

export const GET_ONE_REPO = gql`
  query repository($id: ID!) {
    repository(id: $id) {
      id
      ownerAvatarUrl
      fullName
      description
      language
      forksCount
      stargazersCount
      ratingAverage
      reviewCount
      url
    }
  }
`;

export const GET_REPO_REVIEWS = gql`
  query repository($id: ID!) {
    repository(id: $id) {
      id
      fullName
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;
