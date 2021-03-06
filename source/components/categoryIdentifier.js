const React = require('React');
const StyleSheet = require('StyleSheet');
const Text = require('Text');
const View = require('View');

class CategoryIdentifier extends React.Component {
  render() {
    const colorStyles = [styles.color];
    if (this.props.color) {
      colorStyles.push({ backgroundColor: this.props.color });
    }
    if (this.props.dotSize) {
      colorStyles.push({
        height: this.props.dotSize,
        width: this.props.dotSize,
        borderRadius: this.props.dotSize,
      });
    }

    const textStyles = [styles.text];
    if (this.props.fontSize) {
      textStyles.push({ fontSize: this.props.fontSize });
    }

    return (
      <View style={styles.container}>
        <View style={colorStyles} />
        <Text style={textStyles}>{this.props.children}</Text>
      </View>
    );
  }
}

const colorSize = 8;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  color: {
    height: colorSize,
    width: colorSize,
    borderRadius: colorSize,
    backgroundColor: 'grey', // default
    marginRight: 6,
  },
  text: {
    fontSize: 12,
  },
});

module.exports = CategoryIdentifier;
