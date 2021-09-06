import { nanoid } from "nanoid";

const data = {
  boards: {
    "board-1": {
      id: "board-1",
      title: "Board 1",
      columns: ["col-1", "col-2", "col-3"],
    },
  },
  columns: {
    "col-1": {
      id: "col-1",
      title: "Todo",
      tasks: ["task-1"],
    },
    "col-2": {
      id: "col-2",
      title: "In Progress",
      tasks: [],
    },
    "col-3": {
      id: "col-3",
      title: "Done",
      tasks: [],
    },
  },
  tasks: {
    "task-1": {
      title: "User should drag",
    },
  },
};

const COLUMNS = [
  {
    id: nanoid(),
    title: "Todo",
    tasks: [
      {
        id: nanoid(),
        title: `When the application starts, you have 3 empty columns: "Todo", "In progress", "Done"`,
      },
      {
        id: nanoid(),
        title: `Each column has a "+" button. The user can click this button to create a task card in any column`,
      },
      {
        id: nanoid(),
        title: `Task cards clearly display the title of the contained task`,
      },
      {
        id: nanoid(),
        title: `The user can move tasks between columns using drag-and-drop`,
      },
      {
        id: nanoid(),
        title: `The user can delete a task.`,
      },
      {
        id: nanoid(),
        title: `The user can expand a task card to see its description`,
      },
      {
        id: nanoid(),
        title: `The user can move tasks between columns using the "Move" button in the context menu`,
      },
      {
        id: nanoid(),
        title: `The user can edit column titles`,
      },
      {
        id: nanoid(),
        title: `The user can create columns`,
      },
      {
        id: nanoid(),
        title: `The user can change the order of columns using drag-and-drop`,
      },
      {
        id: nanoid(),
        title: `The user can delete columns (you will have to decide what happens to a column's cards in this case)`,
      },
    ],
  },
  {
    id: nanoid(),
    title: "In progress",
  },
  {
    id: nanoid(),
    title: "Done",
  },
];

export default COLUMNS;
