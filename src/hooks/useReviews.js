import { useEffect, useState } from "react";
import { GET_REPO_REVIEWS } from "../qraphql/queries";
import { useQuery } from "@apollo/client";

const useReviews = (id) => {
  const [reviews, setReviews] = useState();
  const { data, loading, error } = useQuery(GET_REPO_REVIEWS, {
    variables: {
      id,
    },
  });

  useEffect(() => {
    if (!data) return;

    const { repository } = data;

    setReviews(repository.reviews.edges);
  }, [data]);

  return {
    error,
    loading,
    reviews,
  };
};

export default useReviews;
