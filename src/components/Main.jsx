import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Route, Switch, Redirect } from "react-router-native";

import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import SignIn from "./SignIn";
import SingleRepositoryView from "./SingleRepositoryView";
import Notification from "./Notification";

import useAuthStorage from "../hooks/useAuthStorage";
import CreateReview from "./CreateReview";
import SignUp from "./SignUp";
import RepoSorter from "./RepoSorter";
import SearchBar from "./SearchBar";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  const [notification, setNotification] = useState(null);
  const [selectedValue, setSelectedValue] = useState("");
  const [filterValue, setFilterValue] = useState("");

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
      {notification ? <Notification message={notification} /> : null}
      <Switch>
        <Route exact path="/">
          <SearchBar setFilterValue={setFilterValue} />
          <RepoSorter
            setSelectedValue={setSelectedValue}
            selectedValue={selectedValue}
          />
          <RepositoryList
            selectedValue={selectedValue}
            filterValue={filterValue}
          />
        </Route>
        <Route exact path="/signin">
          <SignIn setNotification={setNotification} />
        </Route>
        <Route exact path="/createReview">
          <CreateReview setNotification={setNotification} />
        </Route>
        <Route exact path="/signup">
          <SignUp setNotification={setNotification} />
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
