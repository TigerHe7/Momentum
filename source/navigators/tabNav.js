import React from 'react';

import { TabNavigator, TabBarBottom } from 'react-navigation';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import PlanningScreenNav from './planScreenNav';
import TodayScreenNav from './todayScreenNav';

import GoalScreen from './../screens/goalScreen';

import Colors from './../styles/colors';

const routeConfiguration = {
  PlanningScreen: { screen: PlanningScreenNav },
  TodayScreenNav: { screen: TodayScreenNav },
  GoalScreen: { screen: GoalScreen },
};

const tabBarConfiguration = {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'GoalScreen') {
        iconName = 'circular-graph';
        return <Entypo name={iconName} size={25} color={tintColor} />;
      } else if (routeName === 'FocusScreen') {
        iconName = 'flame';
        return <Octicons name={iconName} size={25} color={tintColor} />;
      } else if (routeName === 'TaskScreen') {
        iconName = 'calendar-text';
        return <MaterialCommunityIcons name={iconName} size={25} color={tintColor} />;
      } else if (routeName === 'PlanningScreen') {
        iconName = 'calendar-text';
        return <MaterialCommunityIcons name={iconName} size={25} color={tintColor} />;
      }
      return <MaterialCommunityIcons name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: Colors.primary,
    inactiveTintColor: 'gray',
    showLabel: false,
  },
  initialRouteName: 'TodayScreenNav',
  lazy: false,
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: true,
};

export default TabNavigator(routeConfiguration, tabBarConfiguration);
