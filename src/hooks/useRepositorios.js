import { useState, useEffect } from "react";
import { GET_REPOSITORIES } from "../qraphql/queries";
import { useQuery } from "@apollo/client";

const useRepositorios = (...values) => {
  const [repos, setRepos] = useState();

  console.log(values);

  const sortingParams = values[0];
  const filter = values[1];

  //const queryParams = selectedValue.split(" ");

  let queryOptions = {};

  const { data, error, loading } = useQuery(GET_REPOSITORIES, queryOptions);

  useEffect(() => {
    if (!data) return;
    const { repositories } = data;

    setRepos(repositories);
  }, [data]);

  return {
    repositories: repos,
    loading,
    error,
  };
};

export default useRepositorios;
