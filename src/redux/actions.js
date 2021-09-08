// This file contains shared actions

export const CREATE_COLUMN = "board/create-column";
export const CREATE_TASK = "column/create-task";

export const createColumn = (payload) => ({
  type: CREATE_COLUMN,
  payload,
});

export const createTask = (payload) => ({
  type: CREATE_TASK,
  payload,
});
