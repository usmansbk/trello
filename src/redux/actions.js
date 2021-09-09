// This file contains shared actions

export const CREATE_COLUMN = "board/create-column";
export const CREATE_TASK = "column/create-task";
export const DELETE_COLUMN = "column/delete";
export const DELETE_TASK = "task/delete";

export const deleteColumn = (payload) => ({
  type: DELETE_COLUMN,
  payload,
});

export const createColumn = (payload) => ({
  type: CREATE_COLUMN,
  payload,
});

export const createTask = (payload) => ({
  type: CREATE_TASK,
  payload,
});

export const deleteTask = (payload) => ({
  type: DELETE_TASK,
  payload,
});
