const React = require('React');
const StyleSheet = require('StyleSheet');
const Text = require('Text');
const TouchableNativeFeedback = require('TouchableNativeFeedback');
const View = require('View');

import Time from './../util/time';

class GoalCard extends React.Component<{
  onPress: () => any,
}> {
  handleOnPress(func) {
    this.requestAnimationFrame(() => {
      func();
    });
  }

  render() {
    const { onPress, data } = this.props;
    const name = Time.formatFromDateStrings(data.start, data.end);

    return (
      <TouchableNativeFeedback
        style={styles.touchable}
        useForeground
        background={TouchableNativeFeedback.SelectableBackground()}
        onPress={() => { this.handleOnPress(onPress); }}>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.nameText}>{name}</Text>
          </View>
          <View style={styles.statsContainer} />
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
