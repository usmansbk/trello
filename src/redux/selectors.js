import { createSelector } from "reselect";

export const selectBoardById = (id) => (state) => state.boards[id];

export const selectColumnById = (id) => (state) => state.columns[id];

const selectTasks = (state) => state.tasks;
const selectColumns = (state) => state.columns;
const selectBoards = (state) => state.boards;

export const makeSelectTasksByIds = (ids) =>
  createSelector(selectTasks, (tasks) => ids.map((id) => tasks[id]));

export const makeSelectBoardColumns = (taskId) =>
  createSelector(
    selectTasks,
    selectColumns,
    selectBoards,
    (tasks, columns, boards) => {
      const { columnId } = tasks[taskId];
      const { boardId } = columns[columnId];
      const board = boards[boardId];
      const columnIds = board.columnIds;

      return columnIds.reduce((cols, id) => {
        if (id === columnId) {
          return cols;
        }
        return [...cols, columns[id]];
      }, []);
    }
  );
