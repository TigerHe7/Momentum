const React = require('React');
const StyleSheet = require('StyleSheet');
const Text = require('Text');
const TouchableNativeFeedback = require('TouchableNativeFeedback');
const View = require('View');

import CategoryIdentifier from './../components/categoryIdentifier';
import Time from './../util/time';

class GoalCard extends React.Component {
  handleOnPress(func) {
    requestAnimationFrame(() => {
      func();
    });
  }

  render() {
    const { onPress, data, categoryColor } = this.props;
    const { name, category } = data;

    let time = (data.timeEstimate * 60) - data.secondsSpent;
    if (time < 0) time = 0;
    const timeString = Time.formatFromSeconds(time, true);

    const progress = ' ';

    return (
      <TouchableNativeFeedback
        style={styles.touchable}
        useForeground
        background={TouchableNativeFeedback.SelectableBackground()}
        onPress={() => { this.handleOnPress(onPress); }} >
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.nameText}>{name}</Text>
            <CategoryIdentifier color={categoryColor}>{category}</CategoryIdentifier>
          </View>
          <View style={styles.statsContainer}>
            <Text style={styles.progressText}>{progress}</Text>
            <Text style={styles.text}>{timeString}</Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 85,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  textContainer: {
    height: '100%',
    width: '50%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  statsContainer: {
    height: '100%',
    width: '50%',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  text: {
    fontSize: 12,
  },
  nameText: {
    fontSize: 16,
    marginBottom: 5,
  },
  progressText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

module.exports = GoalCard;
