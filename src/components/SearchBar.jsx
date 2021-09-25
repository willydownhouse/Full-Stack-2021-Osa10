import React from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import { useDebouncedCallback } from "use-debounce";

function SearchBar({ setFilterValue }) {
  const debounced = useDebouncedCallback((value) => {
    setFilterValue(value);
  }, 500);
  const onChange = (value) => {
    debounced(value);
  };

  return (
    <View>
      <Searchbar
        placeholder="Filter repositories"
        onChangeText={onChange}
        defaultValue=""
      />
    </View>
  );
}

export default SearchBar;
