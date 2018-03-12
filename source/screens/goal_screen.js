import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
	StatusBar,
} from 'react-native';
import RoundedButton from './../components/rounded_button';
import Colors from './../styles/colors';

export default class MyComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
				<StatusBar hidden={true} />
        <Text style={styles.task_title}>Goal Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
	image_container: {
		height: 200,
		width: 200,
		backgroundColor: Colors.imageBackground,
		borderRadius: 100,
		margin: 30,
		elevation: 2,
	},
	buttons_container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		height: 40,
		width: '60%',
	},
  task_title: {
    fontSize: 20,
    textAlign: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
