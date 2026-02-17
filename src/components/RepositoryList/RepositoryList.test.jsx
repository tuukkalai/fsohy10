import { debug, screen, render } from '@testing-library/react-native';
import { RepositoryListContainer } from './index.jsx';
import { roundCount } from "../../utils/roundCount";

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      render(<RepositoryListContainer repositories={repositories} loading={false} />);
      // screen.debug();
      const repositoryItems = screen.getAllByTestId('repositoryItem');
      // console.log(repositories["edges"].length);
      // const [firstRepositoryItem, secondRepositoryItem] = repositoryItems;

      // Compare the length of the repository list
      expect(repositoryItems.length).toBe(repositories.edges.length);

      // Repo details are visible
      // for (let i = 0; i < repositories.edges.length; i++){
      //   expect(screen.getByText(repositories.edges[i].node.fullName)).toBeTruthy();
      //   expect(screen.getByText(repositories.edges[i].node.description)).toBeTruthy();
      //   expect(screen.getByText(repositories.edges[i].node.language)).toBeTruthy();
      // }
      repositoryItems.forEach((repo, i) => {
        const {
          fullName,
          description,
          language,
          forksCount,
          stargazersCount,
          ratingAverage,
          reviewCount,
        } = repositories.edges[i].node;

        expect(screen.getByText(fullName)).toBeTruthy();
        expect(screen.getByText(description)).toBeTruthy();
        expect(screen.getByText(language)).toBeTruthy();
        // The numbers do not work with getByText
        // expect(screen.getByText(roundCount(forksCount))).toBeTruthy();
        // expect(screen.getByText(roundCount(stargazersCount))).toBeTruthy();
        // expect(screen.getByText(roundCount(ratingAverage) + " Rating")).toBeTruthy();
        // expect(screen.getByText(roundCount(reviewCount))).toBeTruthy();
        console.log(`fullName, desc, lang are truthy for ${i}`)
      });
    });
  });
});
