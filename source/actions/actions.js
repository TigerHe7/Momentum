import * as types from './actionTypes';

export function startTask(index) {
  return {
    type: types.START_TASK,
    index,
  };
}

export function pauseTask(index) {
  return {
    type: types.PAUSE_TASK,
    index,
  };
}
