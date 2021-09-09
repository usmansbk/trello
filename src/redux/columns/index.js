import {
  CREATE_COLUMN,
  CREATE_TASK,
  DELETE_COLUMN,
  DELETE_TASK,
  DRAG_TASK,
  MOVE_TASK,
} from "../actions";

const initialData = {
  "col-1": {
    id: "col-1",
    title: "Todo",
    taskIds: [],
    boardId: "default",
  },
  "col-2": {
    id: "col-2",
    title: "In progress",
    taskIds: [],
    boardId: "default",
  },
  "col-3": {
    id: "col-3",
    title: "Done",
    taskIds: [],
    boardId: "default",
  },
};

const RENAME_COLUMN = "column/rename";

export const renameColumn = (payload) => ({
  type: RENAME_COLUMN,
  payload,
});

const reorderTasks = (state, action) => {
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
      [newSourceColumn.id]: newSourceColumn,
      [newDestinationColumn.id]: newDestinationColumn,
    };
  }
};

const reducer = (state = initialData, action) => {
  switch (action.type) {
    case CREATE_COLUMN: {
      const { payload: column } = action;
      return {
        ...state,
        [column.id]: {
          ...column,
          taskIds: [],
        },
      };
    }
    case DELETE_COLUMN: {
      const {
        payload: { columnId },
      } = action;
      return Object.keys(state).reduce((newState, key) => {
        if (key === columnId) {
          return newState;
        }

        return {
          ...newState,
          [key]: state[key],
        };
      }, {});
    }
    case RENAME_COLUMN: {
      const {
        payload: { id, title },
      } = action;
      const column = state[id];

      return {
        ...state,
        [id]: {
          ...column,
          title,
        },
      };
    }
    case CREATE_TASK: {
      const { payload: task } = action;
      const column = state[task.columnId];

      return {
        ...state,
        [column.id]: {
          ...column,
          taskIds: [...column.taskIds, task.id],
        },
      };
    }
    case DELETE_TASK: {
      const {
        payload: { columnId, taskId },
      } = action;
      const column = state[columnId];

      return {
        ...state,
        [columnId]: {
          ...column,
          taskIds: column.taskIds.filter((id) => id !== taskId),
        },
      };
    }
    case MOVE_TASK: {
      const { destinationId, taskId, sourceId } = action.payload;

      const sourceColumn = state[sourceId];
      const destinationColumn = state[destinationId];

      return {
        ...state,
        [sourceId]: {
          ...sourceColumn,
          taskIds: sourceColumn.taskIds.filter((id) => id !== taskId),
        },
        [destinationId]: {
          ...destinationColumn,
          taskIds: [...destinationColumn.taskIds, taskId],
        },
      };
    }
    case DRAG_TASK: {
      return reorderTasks(state, action);
    }
    default:
      return state;
  }
};

export default reducer;
