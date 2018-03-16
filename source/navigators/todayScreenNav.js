import { StackNavigator } from 'react-navigation';
import FocusScreen from './../screens/todayScreens/focusScreen';
import TaskScreen from './../screens/todayScreens/taskScreen';
import AddTaskScreen from './../screens/todayScreens/addTaskScreen';

const RouteConfigs = {
  TaskScreen: {
    screen: TaskScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
  FocusScreen: {
    screen: FocusScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
  AddTaskScreen: {
    screen: AddTaskScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
};

const StackNavigatorConfig = {
  initialRouteName: 'TaskScreen',
  mode: 'card',
};

export default StackNavigator(RouteConfigs, StackNavigatorConfig);
