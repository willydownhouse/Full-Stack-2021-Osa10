import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingLeft: 10,
    backgroundColor: theme.colors.textPrimary,
    height: 100,
    display: "flex",
    justifyContent: "center",
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab
        title="Repositorios"
        onPress={() => console.log("title pressed")}
      />
    </View>
  );
};

export default AppBar;
