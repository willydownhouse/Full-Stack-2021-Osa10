import { useEffect, useState } from "react";
import { GET_REPO_REVIEWS } from "../qraphql/queries";
import { useQuery } from "@apollo/client";

const useReviews = (id) => {
  const [reviews, setReviews] = useState();
  const { data, loading, error, fetchMore } = useQuery(GET_REPO_REVIEWS, {
    variables: {
      first: 5,
      id,
    },
  });

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.repository.reviews.pageInfo.hasNextPage;

    console.log(canFetchMore);

    if (!canFetchMore) {
      return;
    }

    console.log("CAN FETCH MORE");

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        first: 1,
      },
    });
  };

  useEffect(() => {
    if (!data) return;

    const { repository } = data;

    console.log("_______________");
    console.log("reviews length", repository.reviews.edges.length);

    setReviews(repository.reviews.edges);
  }, [data]);

  return {
    error,
    loading,
    reviews,
    fetchMore: handleFetchMore,
  };
};

export default useReviews;
