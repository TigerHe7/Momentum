import * as types from './actionTypes';

export function startTask() {
  return {
    type: types.START_TASK
  };
}

export function pauseTask() {
  return {
    type: types.PAUSE_TASK
  };
}
