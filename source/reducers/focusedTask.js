import * as types from '../actions/actionTypes';

const initialState = {
  taskState: 'PAUSED',
	taskTimeIntervals: [],
	currentTaskState: 'PAUSED',
	currentTask: {
		name: 'Walk the dogs',
		secondsSpent: 150,
		timeEstimate: 30,
		taskTimeIntervals: [],
	},
	dailyTasks: [
		{
			name: 'Walk the dogs',
			secondsSpent: 150,
			timeEstimate: 30,
			taskTimeIntervals: [],
		},
		{
			name: 'Go grocery shopping',
			secondsSpent: 150,
			timeEstimate: 60,
			taskTimeIntervals: [],
		},
		{
			name: 'Work out',
			secondsSpent: 150,
			timeEstimate: 120,
			taskTimeIntervals: [],
		},
		{
			name: 'Work on react native app',
			secondsSpent: 150,
			timeEstimate: 75,
			taskTimeIntervals: [],
		},
	],
};

export default function focusedTask(state = initialState, action = {}) {
	const time = new Date();
  switch (action.type) {
    case types.START_TASK:
      return {
        ...state,
				currentTaskState: 'STARTED',
				currentTask: {
					...state.currentTask,
					taskTimeIntervals: state.currentTask.taskTimeIntervals.concat([time]),
				}
      };
    case types.PAUSE_TASK:
      return {
				...state,
				currentTaskState: 'PAUSED',
				currentTask: {
					...state.currentTask,
					taskTimeIntervals: state.currentTask.taskTimeIntervals.concat([time]),
				}
      };
    default:
      return state;
  }
}