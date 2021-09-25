import React from "react";
import { Picker } from "@react-native-picker/picker";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  selector: {
    height: 40,
  },
});
const RepoSorter = ({ selectedValue, setSelectedValue }) => {
  const onChange = (value) => {
    setSelectedValue(value);
  };
  return (
    <View>
      <Picker
        style={styles.selector}
        selectedValue={selectedValue}
        onValueChange={onChange}
      >
        <Picker.Item label="Latest repositories" value="" />
        <Picker.Item label="Highest rated" value="DESC" />
        <Picker.Item label="Lowest rated" value="ASC" />
      </Picker>
    </View>
  );
};

export default RepoSorter;
