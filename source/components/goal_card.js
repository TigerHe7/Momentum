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
		const time = data.timeEstimate;
    return (
			<TouchableOpacity
				style={styles.touchable}
				onPress={onPress}>
				<View style={styles.container}>
					{/* <View style={styles.iconContainer}/> */}
					<View style={styles.textContainer}>
          	<Text style={styles.text}>{name}</Text>
						<Text style={styles.text}>{time}</Text>
					</View>
				</View>
			</TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
	touchable: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		elevation: 2,
		borderRadius: 10,
		width: '100%',
		height: 85,
		backgroundColor: Colors.goalIconBackground,
	},
	container: {
		height: '100%',
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	iconContainer: {
		backgroundColor: 'darkgrey',
		height: '100%',
		width: 100,
		// borderRadius: 100,
		marginLeft: 15,
		borderLeftWidth: 5,
		borderRadius: 10,
		// flex: 2,
	},
	textContainer: {
		height: '100%',
		flex: 11,
		justifyContent: 'center',
		alignItems: 'center',
		// backgroundColor: 'black',
	},
  text: {
    color: 'grey',
    textAlign: 'center',
    paddingHorizontal: 12,
		paddingVertical: 6,
    fontWeight: '200',
		fontSize: 14,
  },
});

module.exports = GoalCard;
