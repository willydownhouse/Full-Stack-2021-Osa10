import { useQuery } from "@apollo/client";
import React from "react";
import { View, Text, Button } from "react-native";
import { useParams } from "react-router";
import { GET_ONE_REPO } from "../qraphql/queries";
import RepositoryItem from "./RepositoryItem";
import theme from "../theme";
import OpenURLButton from "./OpenUrlButton";
import ReviewsList from "./ReviewsList";

function SingleRepositoryView() {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_ONE_REPO, {
    fetchPolicy: "cache-and-network",
    variables: {
      id,
    },
  });

  if (loading)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );

  console.log(data);
  return (
    <View>
      <RepositoryItem item={data.repository} />
      <View style={theme.btnWrapper}>
        <OpenURLButton url={data.repository.url} title="Go to Github" />
      </View>
      <ReviewsList id={data.repository.id} />
    </View>
  );
}

export default SingleRepositoryView;
