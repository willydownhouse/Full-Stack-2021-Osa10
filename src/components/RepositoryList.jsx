import React from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import useRepositorios from "../hooks/useRepositorios";
import RepositoryItem from "./RepositoryItem";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories, loading, error } = useRepositorios();

  return (
    <RepositoryListContainer
      repositories={repositories}
      loading={loading}
      error={error}
    />
  );
};

export const RepositoryListContainer = ({ repositories, loading, error }) => {
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>{`Error! ${error.message}`}</Text>;

  const repoNodes = repositories ? repositories.edges.map((el) => el.node) : [];
  console.log(repoNodes);
  return (
    <FlatList
      data={repoNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => {
        return <RepositoryItem item={item} />;
      }}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default RepositoryList;
