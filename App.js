/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {TodoList} from './ui/todolist';

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView>
      <Text style={styles.titleText}>
            ToDo List
            {'\n'}
          </Text>
        <View>
          <TodoList />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default App;
