export const toQueryOptions = (selectedValue, filterValue) => {
  if (selectedValue && filterValue) {
    return {
      fetchPolicy: "cache-and-network",
      variables: {
        first: 8,
        orderBy: "RATING_AVERAGE",
        orderDirection: selectedValue,
        searchKeyword: filterValue,
      },
    };
  }
  if (selectedValue) {
    return {
      fetchPolicy: "cache-and-network",
      variables: {
        first: 8,
        orderBy: "RATING_AVERAGE",
        orderDirection: selectedValue,
      },
    };
  }

  if (filterValue) {
    return {
      fetchPolicy: "cache-and-network",
      variables: {
        first: 8,
        searchKeyword: filterValue,
      },
    };
  }

  return {
    fetchPolicy: "cache-and-network",
    variables: {
      first: 8,
    },
  };
};
