import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const GoalList = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={props.onDelete.bind(this,props.id)}>
      <View style={style.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    marginVertical: 10,
  },
});
export default GoalList;
