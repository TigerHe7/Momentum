const React = require('React');
const StyleSheet = require('StyleSheet');
const Text = require('Text');
const TouchableNativeFeedback = require('TouchableNativeFeedback');
const View = require('View');
const FlatList = require('FlatList');

import TaskTypes from '../util/taskTypes';

const colorSize = 8;

class GoalTestingCard extends React.Component {
  handleOnPress(func) {
    requestAnimationFrame(() => {
      func();
    });
  }

  renderTasks(item, color) {
    return (
      <View style={styles.taskContainer}>
        <View style={styles.taskTextAndColorContainer}>
          <View style={[styles.color, { backgroundColor: color }]} />
          <Text style={styles.taskNameText}>{item.name}</Text>
        </View>
        {item.type === TaskTypes.TIMED &&
        <Text style={styles.taskNameText}>{`( Every day for ${item.taskDetails.timeEstimate} mins )`}</Text>
        }
        {item.type === TaskTypes.COMPLETED &&
        <Text style={styles.taskNameText}>{'( Every day )'}</Text>
        }
      </View>
    );
  }

  render() {
    const { onPress, data } = this.props;

    return (
      <TouchableNativeFeedback
        style={styles.touchable}
        useForeground
        background={TouchableNativeFeedback.SelectableBackground()}
        onPress={() => { this.handleOnPress(onPress); }}>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.dateText}>{data.goalName}</Text>
          </View>
          <FlatList
            style={styles.list}
            overScrollMode="auto"
            data={data.habits.map((habit, index) => {
              return {
                ...habit,
                key: habit.name,
                index,
              };
            })}
            renderItem={({ item }) => { return this.renderTasks(item, data.color); }} />
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

module.exports = GoalTestingCard;
