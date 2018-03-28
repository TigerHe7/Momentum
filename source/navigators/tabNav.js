import React from 'react';

import { TabNavigator, TabBarBottom } from 'react-navigation';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import PlanningScreenNav from './planScreenNav';
import TodayScreenNav from './todayScreenNav';

import ProfileScreen from './../screens/profileScreen';

import Colors from './../styles/colors';

const routeConfiguration = {
  PlanningScreen: { screen: PlanningScreenNav },
  TodayScreenNav: { screen: TodayScreenNav },
  ProfileScreen: { screen: ProfileScreen },
};

const tabBarConfiguration = {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'ProfileScreen') {
        iconName = 'circular-graph';
        return <Entypo name={iconName} size={25} color={tintColor} />;
      } else if (routeName === 'TodayScreenNav') {
        iconName = 'flame';
        return <Octicons name={iconName} size={25} color={tintColor} />;
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
