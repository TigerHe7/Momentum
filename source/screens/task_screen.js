import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
	StatusBar,
	ScrollView,
	FlatList,
} from 'react-native';
import RoundedButton from './../components/rounded_button';
import Colors from './../styles/colors';
import GoalCard from './../components/goal_card';
import Time from './../util/time'

const renderTaskCards = function({item}) {
	return (
		<View
			style={styles.taskCardContainer}>
			<GoalCard
				data={item}
				onPress={() => {}}/>
		</View>
	)
}

export default class MyComponent extends Component {
  render() {
		const { state, actions } = this.props.screenProps;
		const {startTask, pauseTask} = { ...actions };
		const date = new Date();
    return (
      <View style={styles.container}>
				<StatusBar hidden={true} />
				<Text style={styles.taskTitle}>
					{Time.getCurrentFormattedDate()}
				</Text>
				<FlatList
					style={styles.scrollview}
					alwaysBounceVertical={true}
					overScrollMode='auto'
					data={state.focusedTask.dailyTasks.map((task) => {
						return {
							...task,
							key: task.name,
						}
					})}
					renderItem={renderTaskCards}>
				</FlatList>
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
	taskTitle: {
		fontSize: 20,
		textAlign: 'center',
		marginTop: 30,
		marginBottom: 30,
	},
	scrollview: {
		flex: 1,
		width: '100%',
		height: '100%',
	},
	taskCardContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		// paddingHorizontal: 15,
		// paddingVertical: 8,
	},
});
