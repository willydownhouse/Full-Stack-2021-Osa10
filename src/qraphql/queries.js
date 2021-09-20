import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query GET_REPOSITORIES {
    repositories {
      edges {
        node {
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
