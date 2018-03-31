import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
} from 'react-native';

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />

        <View style={styles.titleContainer}>
          <View style={styles.profilePic} />
          <View style={styles.descriptionContainer}>
            <Text style={styles.title}>Tiger He</Text>
            <Text>This is the description</Text>
          </View>
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

        {/* <FlatList
          style={styles.scrollview}
          alwaysBounceVertical
          overScrollMode="auto"
          data={this.state.goals.map((goal, index) => {
            return {
              ...goal,
              index,
            };
          })}
          renderItem={({ item }) => { return this.renderTaskCards({ item }); }} /> */}

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
    marginTop: 32,
    marginBottom: 32,
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: 'center',
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
});
