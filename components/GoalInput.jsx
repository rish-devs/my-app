import { React, useState } from 'react'
import { StyleSheet, View, Button, TextInput, Modal, Image } from 'react-native'
const GoalInput = ({ handleGoalPress, visible, onCancelPress }) => {
  const [goal, setgoal] = useState('');
  function goalInputHandler(enteredGoal) {
    setgoal(enteredGoal);
  }
  const handleGoalClick = () => {
    if (goal.length === 0) {
      return;
    }
    handleGoalPress(goal);
    setgoal('');
  }
  return (
    <Modal visible={visible} animationType="slide" >
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')} />
        <TextInput placeholder='Enter your Goal' style={styles.textInput} onChangeText={goalInputHandler} value={goal} />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title='Cancel' color="#f31282" onPress={onCancelPress} />
          </View>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={handleGoalClick} color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  )
}
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    width: '100%',
    borderRadius: 6,
    padding: 16,
    marginTop: 10
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 16
  },
  button: {
    marginHorizontal: 10,
    width: '25%',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain'
  }
})

export default GoalInput
