const data = {
  boards: {
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
  },
  columns: {
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
  },
  tasks: {
    "task-1": {
      id: "task-1",
      title: `When the application starts, you have 3 empty columns: "Todo", "In progress", "Done"`,
    },
    "task-2": {
      id: "task-2",
      title: `Each column has a "+" button. The user can click this button to create a task card in any column`,
    },
    "task-3": {
      id: "task-3",
      title: `Each column has a "+" button. The user can click this button to create a task card in any column`,
    },
    "task-4": {
      id: "task-4",
      title: `Task cards clearly display the title of the contained task`,
    },
    "task-5": {
      id: "task-5",
      title: `The user can move tasks between columns using drag-and-drop`,
    },
    "task-6": {
      id: "task-6",
      title: `The user can delete a task.`,
    },
    "task-7": {
      id: "task-7",
      title: `The user can expand a task card to see its description`,
    },
    "task-8": {
      id: "task-8",
      title: `The user can move tasks between columns using the "Move" button in the context menu`,
    },
    "task-9": {
      id: "task-9",
      title: `The user can edit column titles`,
    },
    "task-10": {
      id: "task-10",
      title: `The user can create columns`,
    },
    "task-11": {
      id: "task-11",
      title: `The user can change the order of columns using drag-and-drop`,
    },
    "task-12": {
      id: "task-12",
      title: `The user can delete columns (you will have to decide what happens to a column's cards in this case)`,
    },
  },
  columnOrder: ["col-1", "col-2", "col-3"],
};

export default data;