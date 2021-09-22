import React from "react";
import { RepositoryListContainer } from "../../components/RepositoryList";
import { render, fireEvent } from "@testing-library/react-native";

const repositories = {
  totalCount: 8,
  pageInfo: {
    hasNextPage: true,
    endCursor: "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
    startCursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
  },
  edges: [
    {
      node: {
        id: "jaredpalmer.formik",
        fullName: "jaredpalmer/formik",
        description: "Build forms in React, without the tears",
        language: "TypeScript",
        forksCount: 1619,
        stargazersCount: 21856,
        ratingAverage: 88,
        reviewCount: 3,
        ownerAvatarUrl: "https://avatars2.githubusercontent.com/u/4060187?v=4",
      },
      cursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
    },
    {
      node: {
        id: "async-library.react-async",
        fullName: "async-library/react-async",
        description: "Flexible promise-based React data loader",
        language: "JavaScript",
        forksCount: 69,
        stargazersCount: 1760,
        ratingAverage: 72,
        reviewCount: 3,
        ownerAvatarUrl: "https://avatars1.githubusercontent.com/u/54310907?v=4",
      },
      cursor: "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
    },
  ],
};

describe("RepositoryList", () => {
  describe("RepositoryListContainer", () => {
    it("renders repository fullName correctly", () => {
      const { getAllByTestId } = render(
        <RepositoryListContainer repositories={repositories} />
      );
      expect(getAllByTestId("fullName")[0]).toHaveTextContent(
        "jaredpalmer/formik"
      );
      expect(getAllByTestId("fullName")[1]).toHaveTextContent(
        "async-library/react-async"
      );
    });

    it("renders description correctly", () => {
      const { getAllByTestId } = render(
        <RepositoryListContainer repositories={repositories} />
      );
      expect(getAllByTestId("description")[0]).toHaveTextContent(
        "Build forms in React, without the tears"
      );
      expect(getAllByTestId("description")[1]).toHaveTextContent(
        "Flexible promise-based React data loader"
      );
    });
    it("renders language correctly", () => {
      const { getAllByTestId } = render(
        <RepositoryListContainer repositories={repositories} />
      );
      expect(getAllByTestId("language")[0]).toHaveTextContent("TypeScript");
      expect(getAllByTestId("language")[1]).toHaveTextContent("JavaScript");
    });
    it("renders forksCount correctly", () => {
      const { getAllByTestId } = render(
        <RepositoryListContainer repositories={repositories} />
      );

      expect(getAllByTestId("count")[0]).toHaveTextContent("1.6k");
      expect(getAllByTestId("count")[4]).toHaveTextContent("69");
    });
    it("renders stargazersCount correctly", () => {
      const { getAllByTestId } = render(
        <RepositoryListContainer repositories={repositories} />
      );

      expect(getAllByTestId("count")[1]).toHaveTextContent("21.9k");
      expect(getAllByTestId("count")[5]).toHaveTextContent("1.8k");
    });
    it("renders ratingAverage correctly", () => {
      const { getAllByTestId } = render(
        <RepositoryListContainer repositories={repositories} />
      );

      expect(getAllByTestId("count")[2]).toHaveTextContent("88");
      expect(getAllByTestId("count")[6]).toHaveTextContent("72");
    });
    it("renders reviewCount correctly", () => {
      const { getAllByTestId } = render(
        <RepositoryListContainer repositories={repositories} />
      );

      expect(getAllByTestId("count")[3]).toHaveTextContent("3");
      expect(getAllByTestId("count")[7]).toHaveTextContent("3");
    });
  });
});
