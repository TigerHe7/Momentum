import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  TextInput,
  Picker,
} from 'react-native';
import Colors from './../../styles/colors';

const generatePickerItems = (categories) => {
  return Object.entries(categories).map((item) => {
    return <Picker.Item label={item[0]} value="java" />;
  });
};

export default class AddTaskScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'red',
    };
  }

  render() {
    const { state } = this.props.screenProps;
    const categories = state.focusedTask.categories;
    const pickerItems = generatePickerItems(categories);
    // const {startTask, pauseTask, finishTask} = { ...actions };
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <TextInput
          placeholder="Name"
          style={styles.input}
          autoCaptitalize
          multiline={false}
          underlineColorAndroid="transparent" />
        <Picker
          style={styles.picker}
          selectedValue={this.state.category}
          mode="dropdown"
          onValueChange={itemValue => this.setState({ category: itemValue })}>
          {pickerItems}
        </Picker>
        <TextInput
          placeholder="Time estimate"
          style={styles.input}
          autoCaptitalize
          multiline={false}
          underlineColorAndroid="transparent" />
        <TextInput
          placeholder="Time estimate"
          style={styles.input}
          autoCaptitalize
          multiline={false}
          underlineColorAndroid="transparent" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  picker: {
    backgroundColor: 'grey',
    height: 60,
    width: '80%',
  },
  input: {
    backgroundColor: 'lightgrey',
    width: '80%',
  },
});
