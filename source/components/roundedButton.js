const React = require('React');
const StyleSheet = require('StyleSheet');
const Text = require('Text');
const TouchableOpacity = require('TouchableOpacity');
const View = require('View');

import Colors from './../styles/colors';

class RoundedButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewStyles: {
        width: '100%',
        height: '100%',
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
    } = this.props;
    const touchableStyles = [styles.touchable, this.state.viewStyles];
    if (color) {
      touchableStyles.push({ borderColor: color });
    }
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={touchableStyles}
          onPressIn={() => { this.setState({ viewStyles: { width: '95%', height: '95%' } }); }}
          onPressOut={() => { this.setState({ viewStyles: { width: '100%', height: '100%' } }); }}
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
    width: 80,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchable: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background,
    borderRadius: 24,
    width: 85,
    height: 35,
    borderWidth: 2,
  },
  text: {
    textAlign: 'center',
    fontWeight: '200',
    fontSize: 14,
  },
});

module.exports = RoundedButton;
