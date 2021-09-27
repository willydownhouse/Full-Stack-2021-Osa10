import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useQuery } from "@apollo/client";
import { AUTHORIZED_USER } from "../qraphql/queries";
import ReviewItem from "./ReviewItem";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

function MyReviews() {
  const { data, loading, error, refetch } = useQuery(AUTHORIZED_USER, {
    variables: {
      includeReviews: true,
    },
  });

  if (loading) return null;
  if (error)
    return (
      <View>
        <Text>Something went wrong</Text>
      </View>
    );

  const reviewNodes = data.authorizedUser.reviews.edges.map((el) => el.node);

  console.log(reviewNodes);

  if (reviewNodes.length === 0) {
    return (
      <View>
        <Text>You have not reviewed any repositories</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => {
        return <ReviewItem item={item} refetch={refetch} />;
      }}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

export default MyReviews;
