import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { StackNavigator} from 'react-navigation'
import PlanningScreen from './screens/planningScreen';
import TaskScreen from './screens/task_screen';

const RouteConfigs = {
  PlanningScreen: {
    screen: PlanningScreen,
    navigationOptions:({navigation}) => ({
      header: null,
    })
  },
  // FocusScreen: {
  //   screen: FocusScreen,
  //   navigationOptions: (props) => ({
  //     header: null,
  //   })
  // }
};

const StackNavigatorConfig = {
  initialRouteName: 'PlanningScreen',
}

export default PlanningScreenNav = StackNavigator(RouteConfigs, StackNavigatorConfig);
