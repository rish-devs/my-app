import React from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'
const GoalItem = ({ itemData, deleteGoalItem, id }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable style={({ pressed }) => pressed && styles.pressedItem} android_ripple={{ color: '#49306C' }} onPress={deleteGoalItem.bind(this, id)}>
        <Text style={styles.goalText} >{itemData.item.text}</Text>
      </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    backgroundColor: '#5e0acc',
    borderRadius: 5,
  },
  goalText: {
    color: 'white',
    fontSize: 18,
    padding: 8,
  },
  pressedItem: {
    color: '#49306C',
    opacity: 0.5
  }
})

export default GoalItem
