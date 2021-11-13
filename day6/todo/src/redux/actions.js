import { ADD_TASK, DELETE_TASK, CHANGE_TASK } from './actionTypes';

export const addTaskAction = (data) => {
  return {
    type: ADD_TASK,
    payload: data,
  };
};

export const deleteTaskAction = (id) => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};

export const changeTaskAction = (id) => {
  return {
    type: CHANGE_TASK,
    payload: id,
  };
};
