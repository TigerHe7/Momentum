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

export function finishTask(index) {
  return {
    type: types.FINISH_TASK,
    index,
  };
}

export function addTask(data) {
  return {
    type: types.ADD_TASK,
    data,
  };
}

export function removeTask(index) {
  return {
    type: types.REMOVE_TASK,
    index,
  };
}

export function setFullState(state) {
  return {
    type: types.SET_FULL_STATE,
    state,
  };
}

export function setDefaultState() {
  return {
    type: types.SET_DEFAULT_STATE,
  };
}
