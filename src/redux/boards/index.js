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

const reducer = (state = initialData, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
