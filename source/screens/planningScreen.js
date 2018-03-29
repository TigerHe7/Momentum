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
import Time from './../util/time';

export default class PlanningScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: [
        {
          date: '20-3-2018',
          tasks: [
            {
              name: 'Walk the dogs',
              category: 'Personal',
              secondsSpent: 150,
              timeEstimate: 30,
              taskTimeIntervals: [],
              currentTaskState: 'PAUSED',
            },
            {
              name: 'Go grocery shopping',
              category: 'Personal',
              secondsSpent: 0,
              timeEstimate: 60,
              taskTimeIntervals: [],
              currentTaskState: 'PAUSED',
            },
            {
              name: 'Work out',
              category: 'Health',
              secondsSpent: 150,
              timeEstimate: 120,
              taskTimeIntervals: [],
              currentTaskState: 'PAUSED',
            },
            {
              name: 'Work on react native app',
              category: 'Career',
              secondsSpent: 150,
              timeEstimate: 75,
              taskTimeIntervals: [],
              currentTaskState: 'PAUSED',
            },
          ],
        }, {
          date: '21-3-2018',
          tasks: [
            {
              name: 'Walk the dogs',
              category: 'Personal',
              secondsSpent: 150,
              timeEstimate: 30,
              taskTimeIntervals: [],
              currentTaskState: 'PAUSED',
            },
            {
              name: 'Go grocery shopping',
              category: 'Personal',
              secondsSpent: 0,
              timeEstimate: 60,
              taskTimeIntervals: [],
              currentTaskState: 'PAUSED',
            },
            {
              name: 'Work out',
              category: 'Health',
              secondsSpent: 150,
              timeEstimate: 120,
              taskTimeIntervals: [],
              currentTaskState: 'PAUSED',
            },
            {
              name: 'Work on react native app',
              category: 'Career',
              secondsSpent: 150,
              timeEstimate: 75,
              taskTimeIntervals: [],
              currentTaskState: 'PAUSED',
            },
          ],
        },
      ],
    };
  }

  async componentWillMount() {
    const storedDatesString = await AsyncStorage.get('stored_dates');
    const storedDates = JSON.parse(storedDatesString).storedDates;
    const data = storedDates.forEach((dateString) => {
      return AsyncStorage.get(dateString);
    });
    this.setState({ days: data });
  }

  renderTaskCards({ item }) {
    return (
      <View style={styles.cardContainer}>
        <SprintCard
          data={item}
          onPress={() => {}} />
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
            {'Progress'}
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
          data={this.state.days.map((day) => {
            return {
              ...day,
              key: day.date,
            };
          })}
          renderItem={({ item }) => { return this.renderTaskCards({ item }); }} />
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
