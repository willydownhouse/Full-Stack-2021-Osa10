import React from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
//import { useDebouncedCallback } from "use-debounce";

function SearchBar({ filterValue, setFilterValue }) {
  const onChange = (value) => {
    setFilterValue(value);
  };

  return (
    <View>
      <Searchbar
        placeholder="Filter repositories"
        onChangeText={onChange}
        value={filterValue}
      />
    </View>
  );
}

export default SearchBar;
