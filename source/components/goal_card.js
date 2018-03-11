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

  render() {
    const { onPress, data } = this.props;
		const name = data.name;
    const category = data.category;

    // time for top right corner
    let time = Time.formatFromSeconds(data.secondsSpent, true);
    if (time != '0m') {
      time += ' / ' + Time.formatFromSeconds(data.timeEstimate * 60);
    } else {
      time = Time.formatFromSeconds(data.timeEstimate * 60);
    }
    return (
			<TouchableNativeFeedback
				style={styles.touchable}
        useForeground={true}
        background={TouchableNativeFeedback.SelectableBackground()}
				onPress={onPress}>
				<View style={styles.container}>
					<View style={styles.textContainer}>
          	<Text style={styles.nameText}>{name}</Text>
            <CategoryIdentifier color={this.props.categoryColor}>{category}</CategoryIdentifier>
					</View>
          <View style={styles.statsContainer}>
            <Text style={styles.timeEstimate}>{time}</Text>
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
    color: 'grey',
    textAlign: 'center',
    fontWeight: '200',
		fontSize: 12,
  },
  nameText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

module.exports = GoalCard;
