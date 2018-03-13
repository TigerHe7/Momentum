import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { TabNavigator, TabBarBottom } from 'react-navigation';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import PlanningScreenNav from './planScreenNav';
import TaskScreenNav from './taskScreenNav';

import FocusScreen from './screens/focus_screen'
import ProfileScreen from './screens/profile_screen';
import GoalScreen from  './screens/goal_screen';

const routeConfiguration = 	{
		PlanningScreen: { screen: PlanningScreenNav},
		TaskScreen: { screen: TaskScreenNav },
		// FocusScreen: { screen: FocusScreen},
		GoalScreen: { screen: GoalScreen },
};

const tabBarConfiguration = {
  navigationOptions: ({ navigation }) => ({
		tabBarIcon: ({ focused, tintColor }) => {
			const { routeName } = navigation.state;
			let iconName;
			if (routeName === 'GoalScreen') {
				iconName = 'circular-graph';
				return <Entypo name={iconName} size={25} color={tintColor} />;
			} else if (routeName === 'FocusScreen') {
				iconName = `flame`;
				return <Octicons name={iconName} size={25} color={tintColor} />;
			} else if (routeName === 'TaskScreen') {
				iconName = 'calendar-text'
				return <MaterialCommunityIcons name={iconName} size={25} color={tintColor} />;
			} else if (routeName === 'PlanningScreen') {
				iconName = 'calendar-text'
				return <MaterialCommunityIcons name={iconName} size={25} color={tintColor} />;
			}
    },
  }),
  tabBarOptions: {
    activeTintColor: Colors.primary,
    inactiveTintColor: 'gray',
		showLabel: false,
  },
	initialRouteName: 'TaskScreen',
	lazy: false,
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: true,
};

export default TabNav = TabNavigator(routeConfiguration, tabBarConfiguration);
