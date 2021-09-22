import React, { useEffect } from "react";
import Constants from "expo-constants";
import { Text, StyleSheet, View } from "react-native";
import { Route, Switch, Redirect } from "react-router-native";

import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import SignIn from "./SignIn";
import SingleRepositoryView from "./SingleRepositoryView";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useAuthStorage from "../hooks/useAuthStorage";

const styles = StyleSheet.create({
  container: {
    //marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  const authStorage = useAuthStorage();

  useEffect(() => {
    authStorage.getAccessToken().then((res) => {
      console.log("TOKEN FROM STORAGE");
      console.log(res);
    });
  }, []);

  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route exact path="/">
          <RepositoryList />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route path="/:id">
          <SingleRepositoryView />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;
