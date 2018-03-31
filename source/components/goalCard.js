const React = require('React');
const StyleSheet = require('StyleSheet');
const Text = require('Text');
const TouchableNativeFeedback = require('TouchableNativeFeedback');
const View = require('View');

import CategoryIdentifier from './../components/categoryIdentifier';
import ProgressBar from './../components/progressBar';
import RoundedButton from './../components/roundedButton';
import Time from './../util/time';
import Colors from './../styles/colors';


const getRemainingTime = (data) => {
  let time = (data.timeEstimate * 60) - data.secondsSpent;
  if (time < 0) time = 0;
  return Time.formatFromSeconds(time, true);
};

class GoalCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  render() {
    const {
      index,
      data,
      categoryColor,
      actions,
    } = this.props;
    const {
      name,
      category,
      taskTimeIntervals,
      timeEstimate,
      currentTaskState,
    } = data;

    const timeString = getRemainingTime(data);
    let progress;
    if (currentTaskState === 'PAUSED') {
      if (taskTimeIntervals.length === 0) {
        progress = ' '
      } else {
        progress = 'Started'
      }
    } else if (currentTaskState === 'STARTED') {
      progress = 'In Progress'
    }

    const containerStyle = [styles.container];
    if (this.state.expanded) {
      containerStyle.push({
        height: 150,
      });
    }

    // center button props
    let buttonCenterName = '';
    let buttonCenterAction = () => {};
    let buttonCenterColor = 'grey';
    if (currentTaskState === 'STARTED') {
      buttonCenterName = 'Pause';
      buttonCenterAction = actions.pauseTask;
      buttonCenterColor = categoryColor; // Colors.buttonBackgroundPause;
    } else if (currentTaskState === 'PAUSED' || currentTaskState === 'FINISHED') {
      buttonCenterName = 'Start';
      buttonCenterAction = actions.startTask;
      buttonCenterColor = Colors.buttonBackgroundStart;
    }

    return (
      <TouchableNativeFeedback
        useForeground
        onLongPress={() => { actions.removeTask(index); }}
        background={TouchableNativeFeedback.SelectableBackground()}
        onPress={() => { this.setState({ expanded: !this.state.expanded }); }} >
        <View style={containerStyle}>

          <View style={styles.topContainer}>
            <Text style={styles.nameText}>
              {name}
            </Text>
            { !this.state.expanded &&
            <Text style={styles.progressText}>{progress}</Text>
            }
          </View>

          <View style={styles.statsContainer}>
            <CategoryIdentifier color={categoryColor}>
              {category}
            </CategoryIdentifier>
            <Text style={styles.text}>{timeString}</Text>
          </View>

          { this.state.expanded &&
            <View style={{ height: 16 }} />
          }

          { this.state.expanded &&
            <ProgressBar
              taskTimeIntervals={taskTimeIntervals}
              maxTime={timeEstimate}
              barColor={buttonCenterColor} />
          }

          { this.state.expanded &&
            <View style={{ height: 16 }} />
          }

          { this.state.expanded &&
            <View style={styles.buttonContainer}>
              <RoundedButton
                title={buttonCenterName}
                onPress={() => { buttonCenterAction(index); }}
                color={buttonCenterColor} />
              <View style={{ width: 12 }} />
              <RoundedButton
                title="Finish"
                onPress={() => { actions.finishTask(index); }}
                color={Colors.buttonBackgroundFinish} />
            </View>
          }

        </View>
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 85,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
  },
  topContainer: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  statsContainer: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 12,
  },
  nameText: {
    fontSize: 16,
    marginBottom: 5,
  },
  progressText: {
    fontSize: 14,
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row-reverse',
    width: '100%',
  },
});

module.exports = GoalCard;
