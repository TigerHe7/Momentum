const React = require('React');
const StyleSheet = require('StyleSheet');
const Text = require('Text');
const View = require('View');
const Modal = require('Modal');
const TouchableWithoutFeedback = require('TouchableWithoutFeedback');

import Colors from './../styles/colors';

class AddTaskModal extends React.Component {
  render() {
    const { visible, changeVisibility } = this.props;
    return (
      <Modal
        animationType="fade"
        transparent
        visible={visible}
        onRequestClose={() => {
        }}>
        <TouchableWithoutFeedback
          style={styles.touchable}
          onPress={changeVisibility}>
          <View style={styles.view}>
            <Text>Hello Wsorld!</Text>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  touchable: {
    height: '100%',
    width: '100%',
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.background,
    height: 200,
    width: '100%',
  },
});

module.exports = AddTaskModal;
