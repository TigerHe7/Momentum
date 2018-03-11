'use strict';

const ColorPropType = require('ColorPropType');
const Platform = require('Platform');
const React = require('React');
const PropTypes = require('prop-types');
const StyleSheet = require('StyleSheet');
const Text = require('Text');
const TouchableNativeFeedback = require('TouchableNativeFeedback');
const TouchableOpacity = require('TouchableOpacity');
const View = require('View');

import Colors from './../styles/colors';
import CategoryIdentifier from './../components/category_identifier';
import Time from './../util/time';

class GoalCard extends React.Component<{
  onPress: () => any,
}> {
  static propTypes = {
    // data: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
  };

  handleOnPress(func) {
    requestAnimationFrame(() => {
      func();
    });
  }

  render() {
    const { onPress, data } = this.props;
		const name = data.name;
    const status = data.currentTaskState;
    const category = data.category;

    let time = data.timeEstimate * 60 - data.secondsSpent;
    if (time < 0) time = 0;
    const timeString = Time.formatFromSeconds(time, true);

    let progress = ' ';
    // if (status === 'PAUSED' && data.secondsSpent > 0) {
    //   progress = 'paused';
    // } else if (status === 'STARTED') {
    //   progress = 'in progress';
    // }


    return (
			<TouchableNativeFeedback
				style={styles.touchable}
        useForeground={true}
        background={TouchableNativeFeedback.SelectableBackground()}
				onPress={() => {this.handleOnPress(onPress)}}>
				<View style={styles.container}>
					<View style={styles.textContainer}>
          	<Text style={styles.nameText}>{name}</Text>
            <CategoryIdentifier color={this.props.categoryColor}>{category}</CategoryIdentifier>
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
