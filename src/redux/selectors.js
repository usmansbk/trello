import { createSelector } from "reselect";

export const selectBoardById = (id) => (state) => state.boards[id];

export const selectColumnById = (id) => (state) => state.columns[id];

const tasksSelector = (state) => state.tasks;

export const selectTaskByIds = (ids) =>
  createSelector(tasksSelector, (tasks) => ids.map((id) => tasks[id]));
