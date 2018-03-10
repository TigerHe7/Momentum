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

import FocusScreen from './source/screens/focus_screen';
import TaskScreen from './source/screens/task_screen';
import ProfileScreen from './source/screens/profile_screen';
import GoalScreen from  './source/screens/goal_screen';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from './source/reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

import * as actions from './source/actions/actions'
import { connect } from 'react-redux';
// import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
// import Counter from '../components/counter';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
			<Provider store={store}>
      	<FocusApp/>
			</Provider>
    );
  }
}

class Focus extends Component {
	constructor(props) {
    super(props);
  }

	render() {
		return (
			<TabNav
				screenProps={this.props}/>
		);
	}
}

const routeConfiguration = 	{
		TaskScreen: { screen: TaskScreen },
		FocusScreen: { screen: FocusScreen},
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
			}
    },
  }),
  tabBarOptions: {
    activeTintColor: Colors.primary,
    inactiveTintColor: 'gray',
		showLabel: false,
  },
	initialRouteName: 'FocusScreen',
	lazy: false,
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: true,
};

const TabNav = TabNavigator(routeConfiguration, tabBarConfiguration);

const FocusApp = connect(state => ({
    state: state
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(Focus);

// const styles = StyleSheet.create({
// });
