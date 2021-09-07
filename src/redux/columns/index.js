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

const reducer = (state = initialData, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
