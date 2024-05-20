import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query GetRepositories {
    repositories {
      edges {
        node {
          id
          name
          url
          description
          forksCount
          fullName
          language
          ownerAvatarUrl
          stargazersCount
          reviewCount
          ratingAverage
        }
      }
    }
  }
`;
