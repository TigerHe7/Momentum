import React, { Component } from 'react';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

import * as actions from './actions/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AppContainer from './navigators/navContainer';

const FocusApp = connect(
  state => ({ state }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch),
  }),
)(AppContainer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <FocusApp />
      </Provider>
    );
  }
}
