import { useState } from 'react'
import { StyleSheet, View, Button, TextInput, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar'
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {
  const [goalsList, setgoalsList] = useState([])
  const [modalIsVisible, setmodalIsVisible] = useState(false)
  function handleModalVisibility() {
    setmodalIsVisible(true)
  }
  function endGoalInputModal() {
    setmodalIsVisible(false)
  }
  function handleGoalPress(goal) {
    setgoalsList((goalsList) => [...goalsList, { text: goal, id: Math.random().toString() }]);
    endGoalInputModal();
  }
  function deleteItemHandler(id) {
    setgoalsList((goalsList) => {
      return goalsList.filter((goal) => goal.id !== id)
    })
  }
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button onPress={handleModalVisibility} title='Add a Goal' color="#a065ec" />
        <GoalInput visible={modalIsVisible} handleGoalPress={handleGoalPress} onCancelPress={endGoalInputModal} />
        <View style={styles.goalContainer}>
          <FlatList data={goalsList} renderItem={itemData => {
            return <GoalItem id={itemData.item.id} itemData={itemData} deleteGoalItem={deleteItemHandler} />
          }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
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
  goalContainer: {
    flex: 5
  },
  goalItem: {
    margin: 8,
    padding: 8,
    backgroundColor: '#5e0acc',
    borderRadius: 5,
  },
  goalText: {
    color: 'white',
    fontSize: 18,
  }
});
