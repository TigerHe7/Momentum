import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
	StatusBar,
	TextInput,
	Picker,
} from 'react-native';
import RoundedButton from './../components/rounded_button';
import Colors from './../styles/colors';
import Time from './../util/time'

const generatePickerItems = function(categories) {
		return Object.entries(categories).map((item) => {
			return <Picker.Item label={item[0]} value="java" />
		});
}

export default class AddTaskScreen extends Component {

	constructor(props) {
		super(props);
		this.state = {
			category: 'red',
		}
	}

  render() {
		const { state, actions } = this.props.screenProps;
		const categories = state.focusedTask.categories;
		let pickerItems = generatePickerItems(categories);
		// const {startTask, pauseTask, finishTask} = { ...actions };
    return (
      <View style={styles.container}>
			<StatusBar hidden={true} />
				<TextInput
					placeholder={'Name'}
					style={styles.input}
					autoCaptitalize={true}
					multiline={false}
					underlineColorAndroid='transparent'/>
				<Picker
					style={styles.picker}
					selectedValue={this.state.category}
					mode={'dropdown'}
					onValueChange={(itemValue, itemIndex) => this.setState({category: itemValue})}>
					{pickerItems}
				</Picker>
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
	picker: {
		backgroundColor: 'grey',
		height: 60,
		width: '80%',
	},
	input: {
		backgroundColor: 'lightgrey',
		width: '80%',
	},
});
