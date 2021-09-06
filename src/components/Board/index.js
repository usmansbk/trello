import clsx from "clsx";
import { nanoid } from "nanoid";
import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import AutosizeInput from "react-input-autosize";
import IconButton from "../common/Button/IconButton";
import Icon from "../common/Icon";
import AddCard from "./AddCard";
import styles from "./index.module.css";
import AddColumn from "./AddColumn";
import MenuButton from "../common/Button/MenuButton";

const COLUMNS = [
  {
    id: nanoid(),
    title: "Todo",
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

const CardList = ({ title }) => {
  return (
    <div className={styles.cardList}>
      <ColumnHeader title={title} />
      <div className={styles.cardBody}>
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
        <BoardTitle title="Board Name" />
        <MenuButton name="fa-trash" />
      </header>
      <div className={styles.content}>
        <div className={styles.board}>
          <ul className={styles.columns}>
            {COLUMNS.map(({ title, id }) => (
              <li key={id} className={styles.column}>
                <CardList title={title} />
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
