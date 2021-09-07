const initialData = {
  "board-1": {
    id: "board-1",
    title: "MintBean Project",
    columnIds: ["col-1", "col-2", "col-3"],
  },
  "board-2": {
    id: "board-2",
    title: "React Capstone",
    columnIds: [],
  },
  "board-3": {
    id: "board-3",
    title: "Side Project",
    columnIds: [],
  },
  byIds: ["board-1", "board-2", "board-3"],
};

const DRAG_COLUMN = "boards/drag-column";

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
    case DRAG_COLUMN: {
      return reorderColumns(state, action);
    }
    default:
      return state;
  }
};

export default reducer;
