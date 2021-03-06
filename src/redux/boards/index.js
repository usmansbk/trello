import { CREATE_COLUMN, DELETE_COLUMN } from "../actions";

const initialData = {
  default: {
    id: "default",
    title: "Kanban",
    columnIds: ["col-1", "col-2", "col-3"],
  },
  byIds: ["default"],
};

const CREATE_BOARD = "board/create";
const DELETE_BOARD = "board/delete";
const RENAME_BOARD = "board/rename";
const DRAG_COLUMN = "board/drag-column";

export const createBoard = (data) => ({
  type: CREATE_BOARD,
  payload: {
    ...data,
    columnIds: [],
  },
});

export const renameBoard = (payload) => ({
  type: RENAME_BOARD,
  payload,
});

export const deleteBoard = (id) => ({
  type: DELETE_BOARD,
  id,
});

export const dragColumn = (payload) => ({
  type: DRAG_COLUMN,
  payload,
});

const reorderColumns = (state, action) => {
  const { result, id } = action.payload;
  const { source, destination, draggableId } = result;

  const board = state[id];

  const newColumnOrder = [...board.columnIds];
  newColumnOrder.splice(source.index, 1);
  newColumnOrder.splice(destination.index, 0, draggableId);

  return {
    ...state,
    [board.id]: {
      ...board,
      columnIds: newColumnOrder,
    },
  };
};

const reducer = (state = initialData, action) => {
  switch (action.type) {
    case CREATE_BOARD: {
      const { payload } = action;
      return {
        ...state,
        [payload.id]: payload,
        byIds: [...state.byIds, payload.id],
      };
    }
    case CREATE_COLUMN: {
      const { payload: column } = action;
      const board = state[column.boardId];

      return {
        ...state,
        [board.id]: {
          ...board,
          columnIds: [...board.columnIds, column.id],
        },
      };
    }
    case DELETE_COLUMN: {
      const {
        payload: { boardId, columnId },
      } = action;
      const board = state[boardId];

      return {
        ...state,
        [boardId]: {
          ...board,
          columnIds: board.columnIds.filter((id) => id !== columnId),
        },
      };
    }
    case RENAME_BOARD: {
      const {
        payload: { id, title },
      } = action;
      const board = state[id];

      return {
        ...state,
        [id]: {
          ...board,
          title,
        },
      };
    }
    case DELETE_BOARD: {
      return {
        ...Object.keys(state).reduce((result, key) => {
          if (key === action.id) {
            return result;
          }
          return {
            ...result,
            [key]: state[key],
          };
        }, {}),
        byIds: state.byIds.filter((id) => id !== action.id),
      };
    }
    case DRAG_COLUMN: {
      return reorderColumns(state, action);
    }
    default:
      return state;
  }
};

export default reducer;
