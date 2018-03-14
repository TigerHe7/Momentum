import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { StackNavigator} from 'react-navigation'
import FocusScreen from './screens/todayScreens/focusScreen';
import TaskScreen from './screens/todayScreens/taskScreen';
import AddTaskScreen from './screens/todayScreens/addTaskScreen';

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
  },
	AddTaskScreen: {
		screen: AddTaskScreen,
		navigationOptions: (props) => ({
			header: null,
		})
	}
};

const StackNavigatorConfig = {
  initialRouteName: 'TaskScreen',
	mode: 'card',
}

export default TaskScreenNav = StackNavigator(RouteConfigs, StackNavigatorConfig);
