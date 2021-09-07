const initialData = {
  "col-1": {
    id: "col-1",
    title: "Todo",
    taskIds: new Array(12)
      .fill("task")
      .map((value, index) => value + "-" + (index + 1)),
  },
  "col-2": {
    id: "col-2",
    title: "In progress",
    taskIds: [],
  },
  "col-3": {
    id: "col-3",
    title: "Done",
    taskIds: [],
  },
};

const REORDER_TASKS = "columns/swap-tasks";

export const swapTasks = (payload) => ({
  type: REORDER_TASKS,
  payload,
});

const reducer = (state = initialData, action) => {
  switch (action.type) {
    case REORDER_TASKS: {
      const { result } = action.payload;
      const { source, destination, draggableId } = result;
      const sourceColumn = state[source.droppableId];
      const destinationColumn = state[destination.droppableId];

      if (sourceColumn === destinationColumn) {
        const newTasks = [...sourceColumn.taskIds];
        newTasks.splice(source.index, 1);
        newTasks.splice(destination.index, 0, draggableId);

        const newColumn = {
          ...sourceColumn,
          taskIds: newTasks,
        };

        return {
          ...state,
          [newColumn.id]: newColumn,
        };
      } else {
        const newSourceTaskIds = [...sourceColumn.taskIds];
        newSourceTaskIds.splice(source.index, 1);
        const newSourceColumn = {
          ...sourceColumn,
          taskIds: newSourceTaskIds,
        };

        const newDestinationTaskIds = [...destinationColumn.taskIds];
        newDestinationTaskIds.splice(destination.index, 0, draggableId);
        const newDestinationColumn = {
          ...destinationColumn,
          taskIds: newDestinationTaskIds,
        };

        return {
          ...state,
          columns: {
            ...state.columns,
            [newSourceColumn.id]: newSourceColumn,
            [newDestinationColumn.id]: newDestinationColumn,
          },
        };
      }
    }
    default:
      return state;
  }
};

export default reducer;
