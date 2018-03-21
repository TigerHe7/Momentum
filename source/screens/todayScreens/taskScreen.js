import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  Keyboard,
} from 'react-native';
import CircleButton from './../../components/circleButton';
import Colors from './../../styles/colors';
import GoalCard from './../../components/goalCard';
import AddTaskModal from './../../components/addTaskModal';
import Time from './../../util/time';

export default class MyComponent extends Component {
  state = {
    modalVisible: false,
    keyboardHeight: 0,
  };

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.onKeyboardShow.bind(this));
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.onKeyboardHide.bind(this));
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  onKeyboardShow(event) {
    this.setState({ keyboardHeight: event.endCoordinates.height });
  }

  onKeyboardHide() {
    this.setState({ modalVisible: false });
  }

  addTask() {
    requestAnimationFrame(() => {
      this.props.navigation.navigate('AddTaskScreen');
    });
  }

  renderTaskCards({ item }) {
    return (
      <View style={styles.taskCardContainer}>
        <GoalCard
          data={item}
          categoryColor={item.categoryColor}
          onPress={() => {
            this.props.navigation.navigate('FocusScreen', {
            index: item.index,
            categoryColor: item.categoryColor,
          });
          }} />
        <View style={styles.divider} />
      </View>
    );
  }

  render() {
    const { state } = this.props.screenProps;
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <AddTaskModal
          visible={this.state.modalVisible}
          keyboardHeight={this.state.keyboardHeight}
          changeVisibility={() => { this.setState({ modalVisible: !this.state.modalVisible }); }} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {'Today'}
          </Text>
          <Text style={styles.titleDate}>
            {Time.getCurrentFormattedDate()}
          </Text>
        </View>
        <View style={styles.divider} />
        <FlatList
          style={styles.scrollview}
          alwaysBounceVertical
          overScrollMode="auto"
          data={state.focusedTask.dailyTasks.map((task, index) => {
            return {
              ...task,
              key: task.name,
              index,
              categoryColor: state.focusedTask.categories[task.category].color,
            };
          })}
          renderItem={({ item }) => { return this.renderTaskCards({ item }); }} />
        {/* <View style={styles.addButtonContainer}> */}
        { !this.state.modalVisible &&
          <CircleButton
            title="Add"
            style={styles.addButton}
            onPress={() => {
              this.setState({ modalVisible: !this.state.modalVisible });
              // this.addTask();
             }} />}
        {/* </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    backgroundColor: Colors.background,
  },
  titleContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: 25,
    width: '100%',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    marginTop: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
    marginBottom: 0,
  },
  titleDate: {
    fontSize: 14,
  },
  scrollview: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  taskCardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    width: '100%',
    height: 0.8,
    backgroundColor: 'grey',
    opacity: 0.2,
  },
  addButton: {
    position: 'absolute',
    right: 35,
    bottom: 25,
    zIndex: 1,
  },
});
