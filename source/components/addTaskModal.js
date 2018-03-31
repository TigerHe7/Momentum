const React = require('React');
const StyleSheet = require('StyleSheet');
const View = require('View');
const Modal = require('Modal');
const StatusBar = require('StatusBar');
const TextInput = require('TextInput');

import Colors from './../styles/colors';

const colorSize = 8;

const initialState = {
  categoryColor: 'grey',
  taskName: '',
  category: '',
  startingTime: '',
  timeEstimate: '',
};

class AddTaskModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  render() {
    const {
      visible,
      changeVisibility,
      goals,
      addTaskAction,
    } = this.props;
    const colorStyle = [styles.color, { backgroundColor: this.state.categoryColor }];
    return (
      <Modal
        animationType="fade"
        onShow={() => {
          this.nameInput.focus();
        }}
        transparent
        visible={visible}
        onRequestClose={changeVisibility}>
        <View style={styles.container}>
          <StatusBar hidden />
          {visible &&
            <View style={styles.cardContainer}>
              <View style={styles.buttonContainer}>
                <View style={styles.singleButtonContainer}>
                  <View style={colorStyle} />
                  <TextInput
                    placeholder="Category"
                    ref={(c) => { this.categoryInput = c; }}
                    style={styles.inputCategory}
                    autoCaptitalize
                    blurOnSubmit={false}
                    multiline={false}
                    value={this.state.category}
                    onChangeText={(category) => {
                      if (goals[category]) {
                        this.setState({
                          categoryColor: goals[category].color,
                          category,
                        });
                      } else {
                        this.setState({ category });
                      }
                    }}
                    underlineColorAndroid="transparent"
                    onSubmitEditing={() => {
                        this.startingTimeInput.focus();
                      }} />
                </View>
                <View style={styles.verticalDivider} />
                <View style={styles.singleButtonContainer}>
                  <TextInput
                    placeholder="Starting time"
                    ref={(c) => { this.startingTimeInput = c; }}
                    style={styles.inputCategory}
                    autoCaptitalize
                    blurOnSubmit={false}
                    multiline={false}
                    value={this.state.startingTime}
                    onChangeText={(startingTime) => {
                      this.setState({ startingTime });
                    }}
                    underlineColorAndroid="transparent"
                    onSubmitEditing={() => {
                        this.timeEstimateInput.focus();
                      }} />
                </View>
                <View style={styles.verticalDivider} />
                <View style={styles.singleButtonContainer}>
                  <TextInput
                    placeholder="Time estimate"
                    ref={(c) => { this.timeEstimateInput = c; }}
                    style={styles.inputCategory}
                    autoCaptitalize
                    multiline={false}
                    value={this.state.timeEstimate}
                    onChangeText={timeEstimate => this.setState({ timeEstimate })}
                    underlineColorAndroid="transparent"
                    onSubmitEditing={() => {
                        addTaskAction({
                          name: this.state.taskName,
                          category: this.state.category,
                          secondsSpent: 0,
                          timeEstimate: Number(this.state.timeEstimate),
                          taskTimeIntervals: [],
                          currentTaskState: 'PAUSED',
                        });
                        this.setState({ ...initialState });
                      }} />
                </View>
              </View>
              <View style={styles.divider} />
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Your next task"
                  style={styles.inputName}
                  autoCaptitalize
                  ref={(c) => { this.nameInput = c; }}
                  blurOnSubmit={false}
                  multiline={false}
                  value={this.state.taskName}
                  onChangeText={taskName => this.setState({ taskName })}
                  underlineColorAndroid="transparent"
                  onSubmitEditing={() => {
                      this.categoryInput.focus();
                    }} />
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
  cardContainer: {
    opacity: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.background,
    height: 100,
    width: '100%',
    elevation: 4,
    marginBottom: 0,
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
    // marginLeft: 16,
    justifyContent: 'space-between',
  },
  verticalDivider: {
    height: '100%',
    width: 0.8,
    backgroundColor: 'grey',
    opacity: 0.2,
  },
  singleButtonContainer: {
    width: '33%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputCategory: {
    fontSize: 12,
    width: '100%',
    color: '#808080',
    marginLeft: 5,
  },
  divider: {
    width: '100%',
    height: 0.8,
    backgroundColor: 'grey',
    opacity: 0.2,
  },
  color: {
    height: colorSize,
    width: colorSize,
    borderRadius: colorSize,
    marginLeft: 16,
  },
});

module.exports = AddTaskModal;
