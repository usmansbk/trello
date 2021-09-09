import {
  CREATE_TASK,
  DELETE_COLUMN,
  DELETE_TASK,
  DRAG_TASK,
  MOVE_TASK,
} from "../actions";

const intialState = {
  "welcome-1": {
    id: "welcome-1",
    columnId: "col-1",
    title: "Welcome to Trello",
    description: `
Welcome to Trello Kanban 

We're so excited that you've decided to create a new project! Now that you're here, let's make sure you know how to get the most out of Trello Kanban.
- [x] Create a new project
- [x] Give your project a name
- [ ] Add a new column
- [ ] Drag and drop this card to the new column
`,
  },
  "welcome-2": {
    id: "welcome-2",
    columnId: "col-1",
    title: "Cards",
    description: `Cards can be added to your board to track the progress of your projects. You can also add note cards, like this one!`,
  },
};

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
