import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
} from 'react-native';

import GoalSettingCard from './../components/goalSettingCard';
import Octicons from 'react-native-vector-icons/Octicons';

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderTasks(item) {
    return (
      <View>
        <GoalSettingCard
          data={item}
          onPress={() => {}}
        />
        <View style={styles.divider} />
      </View>
    );
  }

  render() {
    const { goals } = this.props.screenProps.state.appState;
    const namesOfGoals = Object.keys(goals);

    return (
      <View style={styles.container}>
        <StatusBar hidden />

        <View style={styles.titleContainer}>
          <View style={styles.profilePic} />
          <View style={styles.descriptionContainer}>
            <Text style={styles.title}>Jeff Bezos</Text>
            <Text>Aspiring software engineer and student athlete</Text>
          </View>
          <Octicons name="kebab-vertical" size={24} color="grey" />
        </View>

        <View style={styles.divider} />
        <View style={styles.statsContainer}>
          <View style={styles.statContainer}>
            <Text style={styles.statPrimary}>8</Text>
            <Text style={styles.statSecondary}>goals</Text>
          </View>
          <View style={styles.statContainer}>
            <Text style={styles.statPrimary}>16</Text>
            <Text style={styles.statSecondary}>today</Text>
          </View>
          <View style={styles.statContainer}>
            <Text style={styles.statPrimary}>3123</Text>
            <Text style={styles.statSecondary}>completed</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <FlatList
          style={styles.list}
          overScrollMode="auto"
          data={namesOfGoals.map((goalName, index) => {
            return {
              ...goals[goalName],
              goalName,
              key: goalName,
              index,
            };
          })}
          renderItem={({ item }) => { return this.renderTasks(item); }} />

      </View>
    );
  }
}

const profilePicSize = 80;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  divider: {
    width: '100%',
    height: 0.8,
    backgroundColor: 'grey',
    opacity: 0.2,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
  titleContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 32,
    paddingRight: 20,
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  profilePic: {
    height: profilePicSize,
    width: profilePicSize,
    borderRadius: profilePicSize,
    backgroundColor: 'grey',
    elevation: 2,
    marginLeft: 20,
    marginRight: 10,
  },
  statsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 8,
  },
  statContainer: {
    height: '100%',
    marginHorizontal: 6,
    alignItems: 'center',
    width: 120,
  },
  statPrimary: {
    fontWeight: '500',
    fontSize: 20,
  },
  statSecondary: {
    fontSize: 12,
  },
  kebab: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    // height: 40,
    // width: 40,
    right: 8,
    top: 24,
    // borderRadius: 24,
    // borderWidth: 2,
    // borderColor: 'grey',
  },
});
