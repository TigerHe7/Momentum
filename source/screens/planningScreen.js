import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
} from 'react-native';
import Colors from './../styles/colors';
import SprintCard from './../components/sprintCard';
import Time from './../util/time';

const renderTaskCards = ({ item }) => {
  return (
    <View style={styles.cardContainer}>
      <SprintCard
        data={item}
        onPress={() => {}} />
      <View style={styles.divider} />
    </View>
  );
};

export default class PlanningScreen extends Component {
  render() {
    const { state } = this.props.screenProps;
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {'Your Sprints'}
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
          data={state.focusedTask.sprints.map((sprint, index) => {
            return {
              ...sprint,
              key: sprint.start,
              index,
            };
          })}
          renderItem={({ item }) => { return renderTaskCards.call(this, { item }); }} />
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
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    width: '100%',
    height: 0.8,
    backgroundColor: 'grey',
    opacity: 0.2,
  },
});
