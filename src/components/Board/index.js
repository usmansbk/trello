import { nanoid } from "nanoid";
import IconButton from "../common/Button/IconButton";
import styles from "./index.module.css";

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
  return (
    <div className={styles.columnHeader}>
      <h2 className={styles.columnTitle}>{title}</h2>
      <IconButton name="fa-ellipsis-h" />
    </div>
  );
};

const CardList = ({ title }) => {
  return (
    <div className={styles.cardList}>
      <ColumnHeader title={title} />
    </div>
  );
};

const Board = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.board}>
          <ul className={styles.columns}>
            {COLUMNS.map(({ title, id }) => (
              <li key={id} className={styles.column}>
                <CardList title={title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Board;
