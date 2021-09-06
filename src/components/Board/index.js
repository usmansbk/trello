import clsx from "clsx";
import { nanoid } from "nanoid";
import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import AutosizeInput from "react-input-autosize";
import IconButton from "../common/Button/IconButton";
import Icon from "../common/Icon";
import AddCard from "./AddCard";
import Cards from "./Cards";
import styles from "./index.module.css";
import AddColumn from "./AddColumn";
import MenuButton from "../common/Button/MenuButton";

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

const ColumnHeader = ({ title }) => {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(title);

  const toggleEdit = () => {
    setEdit(!edit);
  };

  return (
    <div className={styles.columnHeader}>
      {edit ? (
        <TextareaAutosize
          spellCheck={false}
          maxLength="512"
          className={styles.columnTitle}
          autoFocus
          onBlur={toggleEdit}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        <h2 onClick={toggleEdit} className={styles.columnTitle}>
          {value}
        </h2>
      )}
      <IconButton className={styles.moreButton} name="fa-ellipsis-h" />
    </div>
  );
};

const FooterButton = ({ onClick }) => {
  return (
    <button className={styles.footerButton} onClick={onClick}>
      <Icon name="fa-plus" />
      <span className={styles.footerButtonText}>Add a card</span>
    </button>
  );
};

const ColumnFooter = () => {
  const [showComposer, setComposerVisible] = useState(false);

  const toggleComposer = () => setComposerVisible(!showComposer);

  return (
    <div className={styles.footer}>
      {showComposer && <AddCard onCancel={toggleComposer} />}
      {!showComposer && <FooterButton onClick={toggleComposer} />}
    </div>
  );
};

const List = ({ title, data }) => {
  return (
    <div className={styles.cardList}>
      <ColumnHeader title={title} />
      <div className={styles.cardBody}>
        <Cards data={data} />
        <ColumnFooter />
      </div>
    </div>
  );
};

const BoardTitle = ({ title }) => {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(title);

  const showEdit = () => setEdit(true);
  const hideEdit = () => setEdit(false);

  return (
    <div onClick={showEdit} className={styles.headerButton}>
      {edit ? (
        <AutosizeInput
          autoFocus
          value={value}
          spellCheck={false}
          onChange={(e) => setValue(e.target.value)}
          onBlur={hideEdit}
          inputClassName={clsx(styles.boardTitle, styles.editTitle)}
        />
      ) : (
        <h2 className={styles.boardTitle}>{value}</h2>
      )}
    </div>
  );
};

const Board = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <BoardTitle title="Trello Clone WIP" />
        <MenuButton name="fa-trash" />
      </header>
      <div className={styles.content}>
        <div className={styles.board}>
          <ul className={styles.columns}>
            {COLUMNS.map(({ title, id, tasks }) => (
              <li key={id} className={styles.column}>
                <List title={title} data={tasks} />
              </li>
            ))}
            <li className={styles.column}>
              <AddColumn />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Board;
