import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalsItem';
import GoalInput from './components/GoalsInput';

export default function App() {
  const [modalIsVisible,setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals]= useState([]);

  // Add a new goal to the list when button is pressed
  function addGoalHandler(entredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, 
      {text: entredGoalText, id: Math.random().toString()},
    ]);
    endAddGoalHandler();
  }
  function deleteGoalHandler(id){
    setCourseGoals((currentCourseGoals)=>{
      return currentCourseGoals.filter((goal)=> goal.id !== id);
    });
  }
  function startAddGoalHandler(){
    setModalIsVisible(true);
  }
  function endAddGoalHandler(){
    setModalIsVisible(false);
  }
  return (
    <>
     <StatusBar style='light'/>
     <View style={styles.appContainer}>
     <Button title='Add New Goal' color="#a065ec" onPress={startAddGoalHandler} />
      <GoalInput visible= {modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler}/>
      <View style={styles.goalsContainer}>
      <FlatList data={courseGoals} renderItem={itemData => {
        const goal = itemData.item.text;
        return <GoalItem  text={goal} id={itemData.item.id} onDeleteItem={deleteGoalHandler}/>;
      }} alwaysBounceVertical={false} />    
      </View>
     </View>
    </>
  );
  
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#311b6b'
  },
  goalsContainer: {
    flex: 4
  }
 
});
