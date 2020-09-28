import React, {useReducer, useState} from 'react';
import {StyleSheet, TextInput, View, Button, FlatList} from 'react-native';

import {TodoItem} from './todoitem';
import {todoReducer, initialTodos} from '../state/reducer';
import {addTodo, toggleTodo, deleteTodo} from '../state/actions';

export const TodoList = () => {
  const [todos, dispatchTodos] = useReducer(todoReducer, initialTodos);
  const [task, setTask] = useState('');

  const handleAddTodo = (task) => {
    dispatchTodos(addTodo(task));
    setTask('');
  };

  const handleToggleTodo = (todo) => {
    dispatchTodos(toggleTodo(todo.id));
  };

  const handleDeleteTodo = (todo) => {
    dispatchTodos(deleteTodo(todo.id));
  };

  return (
    <View>
      <TextInput
        style={todolistStyles.list}
        value={task}
        onChangeText={(task) => setTask(task)}
      />
      <Button
        disabled={task === ''}
        onPress={() => handleAddTodo(task)}
        title="Add Todo"
      />
      <FlatList
        data={todos}
        renderItem={({item}) => (
          <TodoItem
            todo={item}
            onCheck={handleToggleTodo}
            onDelete={handleDeleteTodo}></TodoItem>
        )}
        keyExtractor={(item, index) => item.id}
      />
    </View>
  );
};

const todolistStyles = StyleSheet.create({
  list: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
