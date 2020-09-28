import React from 'react';

import {StyleSheet, View, Text, TouchableOpacity, Button} from 'react-native';

export const TodoItem = ({todo, onCheck, onDelete}) => {
  return (
    <View style={todoStyles.item}>
      <TouchableOpacity key={todo.id} onPress={() => onCheck(todo)}>
        <View style={todoStyles.radio}>
          {todo.complete ? <View style={todoStyles.dot} /> : null}
        </View>
      </TouchableOpacity>
      <View>
        <Text style={todoStyles.itemText}>{todo.task}</Text>
      </View>
      <View>
        <Button title="Delete" onPress={() => onDelete(todo)}></Button>
      </View>
    </View>
  );
};

const todoStyles = StyleSheet.create({
  item: {
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
  },
  itemText: {
    fontSize: 24,
    flex: 0.5,
  },
  dot: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#000',
  },
  radio: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
