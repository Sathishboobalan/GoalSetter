import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalList from "./components/GoalList";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (enteredTitle) => {
    setGoalList([
      ...goalList,
      { id: Math.random().toString(), value: enteredTitle },
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = (goalId) => {
    console.log(goalId);
    setGoalList((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelGoalAdditionalHandler = () => {
    setIsAddMode(false)
  };
  return (
    <View style={style.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAdditionalHandler} />
      <FlatList
        keyExtractor={(item) => item.id}
        data={goalList}
        renderItem={(itemData) => (
          <GoalList
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const style = StyleSheet.create({
  screen: { padding: 50 },
});
