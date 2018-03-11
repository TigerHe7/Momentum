import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { StackNavigator} from 'react-navigation'
import FocusScreen from './screens/focus_screen';
import TaskScreen from './screens/task_screen';

const RouteConfigs = {
  TaskScreen: {
    screen: TaskScreen,
    navigationOptions:({navigation}) => ({
      header: null,
    })
  },
  FocusScreen: {
    screen: FocusScreen,
    navigationOptions: (props) => ({
      header: null,
    })
  }
};

const StackNavigatorConfig = {
  initialRouteName: TaskScreen,
}

export default TaskScreenNav = StackNavigator(RouteConfigs);
