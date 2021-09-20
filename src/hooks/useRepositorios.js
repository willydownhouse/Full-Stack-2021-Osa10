import { useState, useEffect } from "react";
import { GET_REPOSITORIES } from "../qraphql/queries";
import { useQuery } from "@apollo/client";

const useRepositorios = () => {
  const [repos, setRepos] = useState();

  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });

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
