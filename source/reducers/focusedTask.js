import * as types from '../actions/actionTypes';
import CategoryColors from '../styles/categoryColors';

const initialState = {
  // taskState: 'PAUSED',
	taskTimeIntervals: [],
	currentTaskState: 'PAUSED',
	currentTask: {
		name: 'Walk the dogs',
    category: 'Personal',
		secondsSpent: 150,
		timeEstimate: 30,
		taskTimeIntervals: [],
	},
  categories: {
    Personal: {
      color: CategoryColors.indigo,
    },
    Career: {
      color: CategoryColors.red,
    },
    Health: {
      color: CategoryColors.yellow,
    },
  },
	dailyTasks: [
		{
			name: 'Walk the dogs',
      category: 'Personal',
			secondsSpent: 150,
			timeEstimate: 30,
			taskTimeIntervals: [],
		},
		{
			name: 'Go grocery shopping',
      category: 'Personal',
			secondsSpent: 0,
			timeEstimate: 60,
			taskTimeIntervals: [],
		},
		{
			name: 'Work out',
      category: 'Health',
			secondsSpent: 150,
			timeEstimate: 120,
			taskTimeIntervals: [],
		},
		{
			name: 'Work on react native app',
      category: 'Career',
			secondsSpent: 150,
			timeEstimate: 75,
			taskTimeIntervals: [],
		},
	],
};

export default function focusedTask(state = initialState, action = {}) {
  switch (action.type) {
    case types.START_TASK:
      return {
        ...state,
				currentTaskState: 'STARTED',
				currentTask: {
					...state.currentTask,
					taskTimeIntervals: state.currentTask.taskTimeIntervals.concat([new Date()]),
				}
      };
    case types.PAUSE_TASK:
      return {
				...state,
				currentTaskState: 'PAUSED',
				currentTask: {
					...state.currentTask,
					taskTimeIntervals: state.currentTask.taskTimeIntervals.concat([new Date()]),
				}
      };
    default:
      return state;
  }
}
