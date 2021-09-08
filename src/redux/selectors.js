export const selectBoardById = (id) => (state) => state.boards[id];

export const selectColumnById = (id) => (state) => state.columns[id];

export const selectTaskByIds = (ids) => (state) => {
  const taskMap = state.tasks;
  const tasks = ids.map((taskId) => taskMap[taskId]);

  return tasks;
};
