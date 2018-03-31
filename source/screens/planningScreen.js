import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  AsyncStorage,
} from 'react-native';
import Colors from './../styles/colors';
import SprintCard from './../components/sprintCard';

export default class PlanningScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentWillMount() {
    const storedTasksStrings = await AsyncStorage.getItem('stored_tasks');
    if (storedTasksStrings) {
      const storedTasks = JSON.parse(storedTasksStrings).storedTasks;
      this.setState({ storedTasks });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {'Progress'}
          </Text>
        </View>
        <View style={styles.divider} />
        {/* FlatList w/ stored tasks */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: Colors.background,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 25,
    width: '100%',
    alignItems: 'flex-end',
    paddingHorizontal: 16,
    marginTop: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    marginRight: 10,
  },
  divider: {
    width: '100%',
    height: 0.8,
    backgroundColor: 'grey',
    opacity: 0.2,
  },
});
