import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Colors from './../styles/colors';

export default class MyComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Text style={styles.task_title}>Goal Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  task_title: {
    fontSize: 20,
    textAlign: 'center',
  },
});
