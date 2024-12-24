import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const startAddGoalHandler = () => {
    setModalIsVisible((true));
  }

  const endAddGoalHandler = () => {
    setModalIsVisible((false));
  }

  // Add goal handler to update state and append the new goal
  const addGoalHandler = (enteredGoal) => {
    if (enteredGoal.trim().length === 0) return; // Prevent adding empty goals
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { text: enteredGoal, id: Math.random().toString() }
    ]);
    setModalIsVisible(false); // Close the modal after adding the goal
  };

  // Delete goal handler to remove a goal by its ID
  const deleteGoalHandler = (goalId) => {
    console.log("Goal to be deleted: ", goalId); // Log goal ID to be deleted
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId); // Filter out the goal
    });
  };

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        {/* Pass the required props to GoalInput */}
        <Button color={'#5e0acc'} title="Add New Goal" onPress={() => { startAddGoalHandler }} />
        {modalIsVisible && <GoalInput visible={modalIsVisible} onAddGoalHandler={addGoalHandler} onCancelGoalHandler={endAddGoalHandler} />}
        <View style={styles.goalsContainer}>

          {/* <ScrollView alwaysBounceVertical={false} >
          {
            courseGoals.map((goal, index) => {
              return <View style={styles.goalItem} key={index}>
                <Text style={styles.goalText}>{goal}</Text>
              </View>
            })
          }
        </ScrollView> */}
          {/* Using FlatList for rendering dynamic list */}
          <FlatList
            data={courseGoals}
            renderItem={itemData => {
              return (
                <GoalItem
                  onDeleteItem={() => deleteGoalHandler(itemData.item.id)} // Pass the goal ID to delete
                  text={itemData.item.text}
                />
              );
            }}
            keyExtractor={(item) => item.id} // Ensure unique keys
          // alwaysBounceVertical={false} 
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: '#1e085a'
  },
  goalsContainer: {
    flex: 7,
  },
});

