const React = require('React');
const StyleSheet = require('StyleSheet');
const Text = require('Text');
const TouchableNativeFeedback = require('TouchableNativeFeedback');
const View = require('View');
const FlatList = require('FlatList');

import Octicons from 'react-native-vector-icons/Octicons';
import Time from './../util/time';

const colorSize = 8;

class SprintCard extends React.Component {
  handleOnPress(func) {
    requestAnimationFrame(() => {
      func();
    });
  }

  renderTasks(item) {
    return (
      <View style={styles.taskContainer}>
        <View style={styles.taskTextAndColorContainer}>
          <View style={[styles.color, { backgroundColor: item.categoryColor }]} />
          <Text style={styles.taskNameText}>{item.name}</Text>
        </View>

        { item.currentTaskState === 'FINISHED' &&
        <Octicons name="check" size={12} color="grey" />
        }

        { item.currentTaskState !== 'FINISHED' &&
        <Octicons name="x" size={12} color="grey" />
        }

      </View>
    );
  }

  render() {
    const { onPress, data, goals } = this.props;
    const { dateString, dailyTasks } = data;
    const name = Time.formatFromDateString(dateString);

    return (
      <TouchableNativeFeedback
        style={styles.touchable}
        useForeground
        background={TouchableNativeFeedback.SelectableBackground()}
        onPress={() => { this.handleOnPress(onPress); }}>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.dateText}>{name}</Text>
          </View>
          <FlatList
            style={styles.list}
            overScrollMode="auto"
            data={dailyTasks.map((task, index) => {
              return {
                ...task,
                key: task.name,
                index,
                categoryColor: goals[task.category].color,
              };
            })}
            renderItem={({ item }) => { return this.renderTasks(item); }} />
        </View>
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  textContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  dateText: {
    fontSize: 16,
    marginBottom: 5,
  },
  list: {
    width: '100%',
  },
  taskContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 2,
  },
  color: {
    height: colorSize,
    width: colorSize,
    borderRadius: colorSize,
    marginRight: 8,
  },
  taskNameText: {
    fontSize: 12,
    marginRight: 8,
  },
  taskTextAndColorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

module.exports = SprintCard;
