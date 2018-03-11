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

export default class MyComponent extends Component {
	constructor(props) {
		super(props);
	}

  render() {
		const { state, actions } = this.props.screenProps;
		const {startTask, pauseTask} = { ...actions };

		// center button props
		let buttonCenterName = '';
		let buttonCenterAction = () => {};
		let buttonCenterColor = 'grey';
		if (state.focusedTask.currentTaskState === 'STARTED') {
			buttonCenterName = 'Pause';
			buttonCenterAction = pauseTask;
			buttonCenterColor = Colors.buttonBackgroundPause;
		} else if (state.focusedTask.currentTaskState === 'PAUSED') {
			buttonCenterName = 'Start';
			buttonCenterAction = startTask;
			buttonCenterColor = Colors.buttonBackgroundStart;
		}

    const title = state.focusedTask.currentTask.name;

    return (
      <View style={styles.container}>
				<StatusBar hidden={true} />

        <Text style={styles.task_title}>{title}</Text>
				<View
					style={styles.image_container}>
				</View>

				<View style={styles.progressBarContainer}>
					<ProgressBar
						taskTimeIntervals={state.focusedTask.currentTask.taskTimeIntervals}
						maxTime={3}/>
				</View>

				<View style={styles.buttons_container}>
					<RoundedButton
						title='Finish'
						onPress={() => {}}
						color={Colors.buttonBackgroundFinish}/>
					<RoundedButton
						title={buttonCenterName}
						onPress={buttonCenterAction}
						color={buttonCenterColor}/>
					<RoundedButton
						title='Log'
						onPress={() => {
						}}
						color={Colors.buttonBackgroundLog}/>
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
	task_title: {
		fontSize: 20,
		textAlign: 'center',
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
