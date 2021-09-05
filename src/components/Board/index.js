import { nanoid } from "nanoid";
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

const Column = ({ name }) => {
  return <div>{name}</div>;
};

const Board = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.board}>
          <ul className={styles.columns}>
            {COLUMNS.map(({ name, id }) => (
              <li key={id} className={styles.column}>
                <Column name={name} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Board;
