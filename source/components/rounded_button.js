'use strict';

const ColorPropType = require('ColorPropType');
const Platform = require('Platform');
const React = require('React');
const PropTypes = require('prop-types');
const StyleSheet = require('StyleSheet');
const Text = require('Text');
const TouchableNativeFeedback = require('TouchableNativeFeedback');
const TouchableOpacity = require('TouchableOpacity');
const TouchableWithoutFeedback = require('TouchableWithoutFeedback');
const Touchable = require('Touchable')
const View = require('View');

import Colors from './../styles/colors';

class RoundedButton extends React.Component<{
  title: string,
  onPress: () => any,
  color?: ?string,
}> {
  static propTypes = {
    title: PropTypes.string.isRequired,
    color: ColorPropType,
    onPress: PropTypes.func.isRequired,
  };

	constructor(props) {
		super(props);
	}

  render() {
    const {
      color,
      onPress,
      title,
    } = this.props;
    const touchableStyles = [styles.touchable];
    const textStyles = [styles.text];
    if (color) {
        touchableStyles.push({backgroundColor: color});
    }
    return (
      <TouchableNativeFeedback
				style={touchableStyles}
        onPress={onPress}
				activeOpacity={0.6}>
        <View
					style={styles.view}>
          <Text style={textStyles}>{this.props.title}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  touchable: {
      elevation: 4,
      backgroundColor: '#2196F3',
      borderRadius: 24,
  	},
	view: {
		width: 85,
		height: 35,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 12,
		paddingVertical: 6,
	},
  text: {
      color: Colors.textLight,
      textAlign: 'center',
      fontWeight: '200',
			fontSize: 14,
    },
});

module.exports = RoundedButton;
