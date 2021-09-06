import { nanoid } from "nanoid";

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
    tasks: [],
  },
  {
    id: nanoid(),
    title: "Done",
    tasks: [],
  },
];

export default COLUMNS;
