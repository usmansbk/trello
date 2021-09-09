import {
  CREATE_TASK,
  DELETE_COLUMN,
  DELETE_TASK,
  DRAG_TASK,
  MOVE_TASK,
} from "../actions";

const intialState = {};

const UPDATE_TASK = "tasks/update";

export const updateTask = (payload) => ({
  type: UPDATE_TASK,
  payload,
});

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case DELETE_COLUMN: {
      const {
        payload: { columnId },
      } = action;

      return Object.keys(state).reduce((newState, key) => {
        const task = state[key];
        if (task.columnId === columnId) {
          return newState;
        }

        return {
          ...newState,
          [key]: task,
        };
      }, {});
    }
    case CREATE_TASK: {
      const { payload: task } = action;

      return {
        ...state,
        [task.id]: task,
      };
    }
    case UPDATE_TASK: {
      const { payload: task } = action;

      return {
        ...state,
        [task.id]: task,
      };
    }
    case DELETE_TASK: {
      const {
        payload: { taskId },
      } = action;

      return Object.keys(state).reduce((newState, key) => {
        if (key === taskId) {
          return newState;
        }

        return {
          ...newState,
          [key]: state[key],
        };
      }, {});
    }
    case DRAG_TASK: {
      const {
        result: { destination, draggableId },
      } = action.payload;
      const task = state[draggableId];
      return {
        ...state,
        [draggableId]: {
          ...task,
          columnId: destination.droppableId,
        },
      };
    }
    case MOVE_TASK: {
      const { taskId, destinationId } = action.payload;

      const task = state[taskId];

      return {
        ...state,
        [taskId]: {
          ...task,
          columnId: destinationId,
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;
