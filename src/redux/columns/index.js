import { CREATE_COLUMN, CREATE_TASK, DELETE_COLUMN } from "../actions";

const initialData = {
  "col-1": {
    id: "col-1",
    title: "Todo",
    taskIds: new Array(11)
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

const DRAG_TASK = "columns/drag-task";
const RENAME_COLUMN = "columns/rename";

export const renameColumn = (payload) => ({
  type: RENAME_COLUMN,
  payload,
});

export const dragTask = (payload) => ({
  type: DRAG_TASK,
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
      const {
        payload: { columnId, task },
      } = action;
      const column = state[columnId];

      return {
        ...state,
        [columnId]: {
          ...column,
          taskIds: [...column.taskIds, task.id],
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
