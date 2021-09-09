import { CREATE_TASK, DELETE_COLUMN, DELETE_TASK } from "../actions";

const UPDATE_TASK = "tasks/update";

export const updateTask = (payload) => ({
  type: UPDATE_TASK,
  payload,
});

const reducer = (state = {}, action) => {
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
    default:
      return state;
  }
};

export default reducer;
