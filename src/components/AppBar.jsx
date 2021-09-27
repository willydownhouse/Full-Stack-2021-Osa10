import React from "react";
import { View, StyleSheet, ScrollView, Text, Pressable } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";
import { useQuery } from "@apollo/client";
import { AUTHORIZED_USER } from "../qraphql/queries";
import useAuthStorage from "../hooks/useAuthStorage";
import { useApolloClient } from "@apollo/client";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingLeft: 10,
    backgroundColor: theme.colors.textPrimary,
    height: 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

const AppBar = () => {
  const { data } = useQuery(AUTHORIZED_USER);
  const authStorage = useAuthStorage();
  const client = useApolloClient();

  console.log("FROM APPBAR");
  console.log(data);

  const tabTitle = data && data.authorizedUser ? "Sign out" : "Sign in";

  const onPress = async () => {
    await authStorage.removeAccessToken();
    client.resetStore();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab title="Repositories" to="/" />
        {data && data.authorizedUser ? (
          <AppBarTab title="Create a review" to="/createReview" />
        ) : null}
        {data && data.authorizedUser ? (
          <AppBarTab title="My reviews" to="/myreviews" />
        ) : null}

        <AppBarTab onPress={onPress} title={tabTitle} to="/signin" />
        {data && !data.authorizedUser ? (
          <AppBarTab title="Sign up" to="/signup" />
        ) : null}
      </ScrollView>
    </View>
  );
};

export default AppBar;
