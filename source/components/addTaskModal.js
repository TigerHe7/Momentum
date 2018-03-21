const React = require('React');
const StyleSheet = require('StyleSheet');
const Text = require('Text');
const View = require('View');
const Modal = require('Modal');
const StatusBar = require('StatusBar');
const TextInput = require('TextInput');

import Colors from './../styles/colors';

const colorSize = 8;

class AddTaskModal extends React.Component {
  state = {
  }

  render() {
    const { visible, changeVisibility, keyboardHeight } = this.props;
    const cardStyle = [styles.view, { marginBottom: 0 }];
    console.log(`keyboardHeight ${keyboardHeight}`);
    return (
      <Modal
        animationType="fade"
        transparent
        visible={visible}
        onRequestClose={changeVisibility}>
        <View style={styles.container}>
          <StatusBar hidden />
          {visible &&
            <View style={cardStyle}>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Your next task"
                  style={styles.inputName}
                  autoCaptitalize
                  autoFocus
                  multiline={false}
                  underlineColorAndroid="transparent"
                  onSubmitEditing={() => {
                      this.categoryInput.focus();
                    }} />
              </View>
              <View style={styles.divider} />
              <View style={styles.buttonContainer}>
              </View>
            </View> }
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
  },
  view: {
    opacity: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.background,
    height: 100,
    width: '100%',
    elevation: 4,
  },
  inputContainer: {
    height: 60,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  inputName: {
    marginLeft: 16,
    fontSize: 16,
    width: '100%',
    color: '#808080',
  },
  buttonContainer: {
    height: 40,
    flexDirection: 'row',
  },
  divider: {
    width: '100%',
    height: 0.8,
    backgroundColor: 'grey',
    opacity: 0.2,
  },
});

module.exports = AddTaskModal;
