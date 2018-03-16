import React, { Component } from 'react';
import TabNav from './tabNav';

export default class Focus extends Component {
  render() {
    return (
      <TabNav screenProps={this.props} />
    );
  }
}
