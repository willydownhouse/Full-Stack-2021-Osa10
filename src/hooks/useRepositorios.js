import { useState, useEffect } from "react";
import { GET_REPOSITORIES } from "../qraphql/queries";
import { useQuery } from "@apollo/client";
import { toQueryOptions } from "../utils/toQueryOtpions";

const useRepositorios = (selectedValue, filterValue) => {
  const [repos, setRepos] = useState();

  const queryOptions = toQueryOptions(selectedValue, filterValue);

  const { data, error, loading, fetchMore } = useQuery(
    GET_REPOSITORIES,
    queryOptions
  );

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    const modifiedQueryOptions = {
      ...queryOptions,
      variables: {
        ...queryOptions.variables,
        first: 2,
        after: data.repositories.pageInfo.endCursor,
      },
    };

    fetchMore(modifiedQueryOptions);
  };

  useEffect(() => {
    if (!data) return;
    const { repositories } = data;

    console.log("_______________");
    console.log(repositories.edges.length);

    setRepos(repositories);
  }, [data]);

  return {
    repositories: repos,
    loading,
    error,
    fetchMore: handleFetchMore,
  };
};

export default useRepositorios;
