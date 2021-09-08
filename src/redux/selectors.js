import { createSelector } from "reselect";

export const selectBoardById = (id) => (state) => state.boards[id];

export const selectColumnById = (id) => (state) => state.columns[id];

const selectTasks = (state) => state.tasks;

export const makeSelectTasksByIds = (ids) =>
  createSelector(selectTasks, (tasks) => ids.map((id) => tasks[id]));
