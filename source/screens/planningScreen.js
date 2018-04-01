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

  renderTasks(item, goals) {
    return (
      <View>
        <SprintCard
          data={item}
          onPress={() => {}}
          goals={goals}
        />
        <View style={styles.divider} />
      </View>
    );
  }

  render() {
    const { pastTasks, goals } = this.props.screenProps.state.appState;
    const toRender = pastTasks.slice();
    const numberOfDays = toRender.length;

    // AsyncStorage.getItem('stored_tasks')
    //   .then((storedTasksStrings) => {
    //     if (storedTasksStrings) {
    //       const storedTasks = JSON.parse(storedTasksStrings).storedTasks;
    //       this.setState({ storedTasks });
    //       toRender.concat(this.state.storedTasks);
    //     }
    //   });

    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {'Progress'}
          </Text>
          <Text style={styles.titleSubheader}>
            {`${numberOfDays} days`}
          </Text>
        </View>
        <View style={styles.divider} />
        {/* FlatList w/ stored tasks */}
        <FlatList
          style={styles.list}
          overScrollMode="auto"
          data={toRender.map((day, index) => {
            return {
              ...day,
              key: day.dateString,
              index,
            };
          })}
          renderItem={({ item }) => { return this.renderTasks(item, goals); }} />
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
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: 25,
    width: '100%',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    marginTop: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
    marginBottom: 0,
  },
  titleSubheader: {

  },
  divider: {
    width: '100%',
    height: 0.8,
    backgroundColor: 'grey',
    opacity: 0.2,
  },
  list: {
    width: '100%',
    height: '100%',
  },
});
