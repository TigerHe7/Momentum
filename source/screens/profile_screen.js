import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
	StatusBar,
} from 'react-native';

export default class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
				<StatusBar hidden={true} />
        <Text>Im the MyComponent component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});