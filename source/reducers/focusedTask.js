import * as types from '../actions/actionTypes';
import CategoryColors from '../styles/categoryColors';

const initialState = {
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
    Misc: {
      color: CategoryColors.yellow,
    },
  },
  sprints: [
    {
      start: '1-2-2018',
      end: '15-2-2018',
    },
    {
      start: '1-3-2018',
      end: '15-3-2018',
    },
  ],
  dailyTasks: [
    {
      name: 'Walk the dogs',
      category: 'Personal',
      secondsSpent: 150,
      timeEstimate: 30,
      taskTimeIntervals: [],
      currentTaskState: 'PAUSED',
    },
    {
      name: 'Go grocery shopping',
      category: 'Personal',
      secondsSpent: 0,
      timeEstimate: 60,
      taskTimeIntervals: [],
      currentTaskState: 'PAUSED',
    },
    {
      name: 'Work out',
      category: 'Health',
      secondsSpent: 150,
      timeEstimate: 120,
      taskTimeIntervals: [],
      currentTaskState: 'PAUSED',
    },
    {
      name: 'Work on react native app',
      category: 'Career',
      secondsSpent: 150,
      timeEstimate: 75,
      taskTimeIntervals: [],
      currentTaskState: 'PAUSED',
    },
  ],
};

export default function focusedTask(state = initialState, action = {}) {
  switch (action.type) {
    case types.START_TASK:
      return {
        ...state,
        dailyTasks: state.dailyTasks.map((task, index) => {
          if (index === action.index) {
            return {
              ...state.dailyTasks[index],
              currentTaskState: 'STARTED',
              taskTimeIntervals: state.dailyTasks[action.index].taskTimeIntervals.concat([new Date()]),
            };
          }
          return task;
        }),
      };
    case types.PAUSE_TASK:
      return {
        ...state,
        dailyTasks: state.dailyTasks.map((task, index) => {
          if (index === action.index) {
            return {
              ...state.dailyTasks[index],
              currentTaskState: 'PAUSED',
              taskTimeIntervals: state.dailyTasks[action.index].taskTimeIntervals.concat([new Date()]),
            };
          }
          return task;
        }),
      };
    case types.FINISH_TASK:
      return {
        ...state,
        dailyTasks: state.dailyTasks.map((task, index) => {
          if (index === action.index) {
            if (state.dailyTasks[index].currentTaskState === 'STARTED') {
              return {
                ...state.dailyTasks[index],
                taskTimeIntervals: state.dailyTasks[action.index].taskTimeIntervals.concat([new Date()]),
                currentTaskState: 'FINISHED',
              };
            }
            return {
              ...state.dailyTasks[index],
              currentTaskState: 'FINISHED',
            };
          }
          return task;
        }),
      };
    default:
      return state;
  }
}
