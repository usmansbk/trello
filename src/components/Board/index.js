import { nanoid } from "nanoid";
import IconButton from "../common/Button/IconButton";
import styles from "./index.module.css";

const COLUMNS = [
  {
    id: nanoid(),
    name: "Todo",
  },
  {
    id: nanoid(),
    name: "In progress",
  },
  {
    id: nanoid(),
    name: "Done",
  },
];

const ColumnHeader = ({ name }) => {
  return (
    <div className={styles.columnHeader}>
      <h2 className={styles.columnName}>{name}</h2>
      <IconButton name="fa-ellipsis-h" />
    </div>
  );
};

const CardList = ({ name }) => {
  return (
    <div className={styles.cardList}>
      <ColumnHeader name={name} />
    </div>
  );
};

const Board = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.board}>
          <ul className={styles.columns}>
            {COLUMNS.map(({ name, id }) => (
              <li key={id} className={styles.column}>
                <CardList name={name} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Board;
