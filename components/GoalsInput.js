import { useState } from "react";
import { StyleSheet,View,Text, TextInput, Button, Modal, Image } from "react-native";

function GoalInput(props) {
    const [entredGoalText, setEnteredGoalText] = useState('');
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
      };
    function addGoalHandler(){
        props.onAddGoal(entredGoalText);
        setEnteredGoalText('');
    }  

    return(
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/goal.png')}/>
        <TextInput 
        style={styles.TextInput} 
        placeholder='Your course goal!'
        onChangeText ={goalInputHandler}
        value={entredGoalText}
        />
       <View style={styles.buttonContainer}>
       <View style={styles.button}>
          <Button title='Add Goal'  onPress={addGoalHandler} color="#5e0acc"/>
       </View>
       <View style={styles.button}>
          <Button title='Cancel' color='#f31282' onPress={props.onCancel}/>
        </View>
       </View>
     </View>
     </Modal>
    )
};

export default GoalInput;

const styles = StyleSheet.create({
inputContainer: {
        flex:  1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
      
},
TextInput: {
        width: '100%', 
        borderColor: '#e4d0ff', 
        backgroundColor: '#e4d0ff',
        color: "#120438",
        borderRadius: 6,
        borderWidth: 1, 
        padding: 16,
        marginRight: 8

},
buttonContainer: {
  marginTop: 16,
  flexDirection: 'row'
},
button: {
  width: 100,
  marginHorizontal: 8
},
image:{
  width: 100,
  height: 100,
  margin: 20
}
});