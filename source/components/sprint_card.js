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
    onPress: PropTypes.func.isRequired,
  };

  handleOnPress(func) {
    requestAnimationFrame(() => {
      func();
    });
  }

  render() {
    const { onPress, data } = this.props;
		const name = Time.formatFromDateStrings(data.start, data.end);

    return (
			<TouchableNativeFeedback
				style={styles.touchable}
        useForeground={true}
        background={TouchableNativeFeedback.SelectableBackground()}
				onPress={() => {this.handleOnPress(onPress)}}>
				<View style={styles.container}>
					<View style={styles.textContainer}>
          	<Text style={styles.nameText}>{name}</Text>
					</View>
          <View style={styles.statsContainer}>
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
  nameText: {
    fontSize: 16,
    marginBottom: 5,
  },
  // progressText: {
  //   fontSize: 16,
  //   marginBottom: 5,
  // },
});

module.exports = GoalCard;
