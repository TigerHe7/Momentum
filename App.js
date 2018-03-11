import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from './source/reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

import * as actions from './source/actions/actions'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import TabNav from './source/tabNav';

class Focus extends Component {
	render() {
		return (
			<TabNav screenProps={this.props}/>
		);
	}
}

const FocusApp = connect(
  state => ({ state: state }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(Focus);

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
