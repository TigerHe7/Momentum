const React = require('React');
const StyleSheet = require('StyleSheet');
const Text = require('Text');
const View = require('View');

import Colors from './../styles/colors';
import Time from './../util/time';

class ProgressBar extends React.Component {
  // refresh functionality
  componentDidMount() {
    this.interval = setInterval(() => this.setState({}), 50);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { taskTimeIntervals, maxTime, barColor } = this.props;

    let timeSpent = 0;
    const intervals = taskTimeIntervals.slice();
    if (intervals.length % 2 === 1) {
      intervals.push(new Date());
    }
    intervals.forEach((start, index) => {
      if (index % 2 === 0) {
        const end = intervals[index + 1];
        timeSpent += Math.floor((end.getTime() - start.getTime()) / 1000);
      }
    });
    const progressBarFillStyle = [styles.progressBar];
    if (barColor) {
      progressBarFillStyle.push({ backgroundColor: barColor });
    }

    // const currentTime = Time.formatFromSeconds(timeSpent);
    // const maxTimeText = Time.formatFromSeconds(maxTime * 60);
    const percentageCompletion = (timeSpent / (maxTime * 60)) * 100;
    const barPercentage = percentageCompletion >= 100 ? '100%' : `${Math.floor(percentageCompletion)}%`;
    return (
      <View style={styles.container}>
        {/* <View style={styles.textContainer}>
          <Text style={styles.timeText}>
            {`${currentTime} / ${maxTimeText}`}
          </Text>
        </View> */}
        <View style={styles.progressBarBase}>
          <View style={[progressBarFillStyle, { width: barPercentage }]} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // textContainer: {
  //   width: '100%',
  //   flexDirection: 'row',
  //   justifyContent: 'flex-end',
  // },
  // timeText: {
  //   fontSize: 14,
  //   marginBottom: 10,
  // },
  progressBarBase: {
    width: '100%',
    height: 6,
    backgroundColor: Colors.progressBarBackground,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: 8,
  },
  progressBar: {
    backgroundColor: Colors.progressBarFill,
    height: '100%',
    borderRadius: 6,
  },
});

module.exports = ProgressBar;
