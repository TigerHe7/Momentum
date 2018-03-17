import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
} from 'react-native';
import RoundedButton from './../../components/roundedButton';
import Colors from './../../styles/colors';
import GoalCard from './../../components/goalCard';
import Time from './../../util/time';

export default class MyComponent extends Component {
  addTask() {
    requestAnimationFrame(() => {
      this.props.navigation.navigate('AddTaskScreen');
    });
  }

  renderTaskCards({ item }) {
    return (
      <View style={styles.taskCardContainer}>
        <GoalCard
          data={item}
          categoryColor={item.categoryColor}
          onPress={() => {
            this.props.navigation.navigate('FocusScreen', {
            index: item.index,
            categoryColor: item.categoryColor,
          });
          }} />
        <View style={styles.divider} />
      </View>
    );
  }

  render() {
    const { state } = this.props.screenProps;
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {'Today'}
          </Text>
          <Text style={styles.titleDate}>
            {Time.getCurrentFormattedDate()}
          </Text>
        </View>

        <View style={styles.divider} />
        <FlatList
          style={styles.scrollview}
          alwaysBounceVertical
          overScrollMode="auto"
          data={state.focusedTask.dailyTasks.map((task, index) => {
            return {
              ...task,
              key: task.name,
              index,
              categoryColor: state.focusedTask.categories[task.category].color,
            };
          })}
          renderItem={({ item }) => { return this.renderTaskCards({ item }); }} />
        <View style={styles.addButtonContainer}>
          <RoundedButton
            title="Add"
            onPress={() => { this.addTask(); }} />
        </View>
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
  titleDate: {
    fontSize: 16,
  },
  scrollview: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  taskCardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    width: '100%',
    height: 0.8,
    backgroundColor: 'grey',
    opacity: 0.2,
  },
  addButtonContainer: {
    width: '100%',
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
