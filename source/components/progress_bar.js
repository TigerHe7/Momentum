'use strict';

const ColorPropType = require('ColorPropType');
const Platform = require('Platform');
const React = require('React');
const PropTypes = require('prop-types');
const StyleSheet = require('StyleSheet');
const Text = require('Text');
const View = require('View');

import Colors from './../styles/colors';
import Time from './../util/time'

class ProgressBar extends React.Component<{
	taskTimeIntervals: any,
	maxTime: number, // in minutes
}>{

	constructor(props) {
		super(props);
	}

	// refresh functionality
	componentDidMount() {
	  this.interval = setInterval(() => this.setState({}), 50);
	}
	componentWillUnmount() {
		clearInterval(this.interval);
	}

  render() {
		let timeSpent = 0;
		const intervals = this.props.taskTimeIntervals.slice();
		if (intervals.length % 2 === 1) {
			intervals.push(new Date());
		}
		intervals.forEach((start, index) => {
			if (index % 2 === 0) {
				const end = intervals[index + 1];
				timeSpent += Math.floor((end.getTime() - start.getTime()) / 1000);
			}
		});

		const currentTime = Time.formatFromSeconds(timeSpent);
		const maxTime = Time.formatFromSeconds(this.props.maxTime * 60);
		const percentageCompletion = (timeSpent / (this.props.maxTime * 60)) * 100;
		const barPercentage = percentageCompletion >= 100 ? '100%' : Math.floor(percentageCompletion) + '%';
		// const actualBarPercentage = percentageCompletion <= 3 ? 8 : barPercentage;

		const {
			taskTimeIntervals,
		} = this.props;
    return (
			<View style={styles.container}>
				<View style={styles.textContainer}>
					<Text style={styles.timeText}>
						{currentTime}
					</Text>
					<Text style={styles.timeText}>
						{maxTime}
					</Text>
				</View>
        <View style={styles.progressBarBase}>
					<View style={[styles.progressBar, {width: barPercentage }]}/>
        </View>
			</View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		height: '100%',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	textContainer: {
		width: '95%',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	timeText: {
		fontSize: 16,
		marginBottom: 10,
	},
	progressBarBase: {
		width: '100%',
		height: 8,
		backgroundColor: Colors.progressBarBackground,
		alignItems: 'flex-start',
		justifyContent: 'center',
		borderRadius: 5,
	},
  progressBar: {
      backgroundColor: Colors.progressBarFill,
			height: '100%',
			// width: this.props.initialTime + '%',
			borderRadius: 5,
    },
});

module.exports = ProgressBar;
