import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
	StatusBar,
} from 'react-native';
import RoundedButton from './../components/rounded_button';
import Colors from './../styles/colors';
import ProgressBar from  './../components/progress_bar';
import CategoryIdentifier from './../components/category_identifier';

export default class MyComponent extends Component {
	constructor(props) {
		super(props);
	}

  render() {
		const { state, actions } = this.props.screenProps;
		const {startTask, pauseTask} = { ...actions };
    const index = this.props.navigation.state.params.index;
    const categoryColor = this.props.navigation.state.params.categoryColor;

    const task = state.focusedTask.dailyTasks[index];

		// center button props
		let buttonCenterName = '';
		let buttonCenterAction = () => {};
		let buttonCenterColor = 'grey';
		if (task.currentTaskState === 'STARTED') {
			buttonCenterName = 'Pause';
			buttonCenterAction = pauseTask;
			buttonCenterColor = categoryColor; //Colors.buttonBackgroundPause;
		} else if (task.currentTaskState === 'PAUSED') {
			buttonCenterName = 'Start';
			buttonCenterAction = startTask;
			buttonCenterColor = Colors.buttonBackgroundStart;
		}

    const title = task.name;
    const maxTime = task.timeEstimate;
    const taskTimeIntervals = task.taskTimeIntervals;
    const category = task.category;

    return (
      <View style={styles.container}>
				<StatusBar hidden={true} />

        <Text style={styles.taskTitle}>{title}</Text>
        <CategoryIdentifier
          dotSize={10}
          fontSize={14}
          color={categoryColor}>{category}</CategoryIdentifier>

				<View style={styles.progressBarContainer}>
					<ProgressBar
						taskTimeIntervals={taskTimeIntervals}
						maxTime={maxTime}/>
				</View>

				<View style={styles.buttons_container}>
          <RoundedButton
            title={buttonCenterName}
            onPress={() => { buttonCenterAction(index) }}
            color={buttonCenterColor}/>
					<RoundedButton
						title='Finish'
						onPress={() => {}}
						color={Colors.buttonBackgroundFinish}/>
					{/* <RoundedButton
						title='Log'
						onPress={() => {
						}}
						color={Colors.buttonBackgroundLog}/> */}
				</View>

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
    marginBottom: 5,
	},
	image_container: {
		height: 250,
		width: 250,
		backgroundColor: Colors.imageBackground,
		borderRadius: 200,
		margin: 30,
		elevation: 2,
	},
	progressBarContainer: {
		width: '75%',
		height: 70,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttons_container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: 8,
		width: '75%',
	},
});
