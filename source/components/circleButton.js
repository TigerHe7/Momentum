const React = require('React');
const StyleSheet = require('StyleSheet');
const Text = require('Text');
const TouchableOpacity = require('TouchableOpacity');
const View = require('View');

import Colors from './../styles/colors';

class CircleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewStyles: {
        width: '80%',
        height: '80%',
      },
    };
  }

  handleOnPress(func) {
    requestAnimationFrame(() => {
      func();
    });
  }

  render() {
    const {
      color,
      onPress,
      title,
      style,
    } = this.props;
    const containerStyles = [styles.container, style];
    const touchableStyles = [styles.touchable, this.state.viewStyles];
    if (color) {
      touchableStyles.push({ backgroundColor: color });
    }
    return (
      <View style={containerStyles}>
        <TouchableOpacity
          style={touchableStyles}
          onPressIn={() => { this.setState({ viewStyles: { width: '75%', height: '75%' } }); }}
          onPressOut={() => { this.setState({ viewStyles: { width: '80%', height: '80%' } }); }}
          onPress={() => { this.handleOnPress(onPress); }}
          activeOpacity={1}>
          <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 75,
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchable: {
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    backgroundColor: 'grey',
    borderRadius: 60,
  },
  text: {
    position: 'absolute',
    color: Colors.textLight,
    textAlign: 'center',
    fontWeight: '200',
    fontSize: 20,
  },
});

module.exports = CircleButton;
