import React, { Component } from 'react';
import { AppState, AsyncStorage } from 'react-native';
import TabNav from './tabNav';
import Time from '../util/time';

export default class Focus extends Component {
  async componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
    const firstRun = await AsyncStorage.getItem('first_run');
    if (firstRun !== 'false') {
      await AsyncStorage.setItem('first_run', 'false');
      this.props.actions.setDefaultState();
    } else {
      const fullStateString = await AsyncStorage.getItem('redux_full_state');
      const fullState = JSON.parse(fullStateString);
      this.props.actions.setFullState(fullState.appState);
    }
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange = async (nextAppState) => {
    if (nextAppState === 'background') {
      await AsyncStorage.setItem('redux_full_state', JSON.stringify(this.props.state));
    }
  }

  render() {
    return (
      <TabNav screenProps={this.props} />
    );
  }
}
