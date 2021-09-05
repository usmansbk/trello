import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

const DATA = [
  {
    id: nanoid(),
    name: "Mintbean Hackthon",
  },
  {
    id: nanoid(),
    name: "School Project",
  },
  {
    id: nanoid(),
    name: "Microverse Capstone project",
  },
];

const Card = ({ name }) => {
  return (
    <div className={styles.boardTileDetails}>
      <h3 className={styles.boardName}>{name}</h3>
    </div>
  );
};

const List = ({ data = [] }) => {
  return (
    <ul className={styles.boardList}>
      {data.map(({ id, name }) => (
        <li key={id} className={styles.boardItem}>
          <Link to={`/${id}`} className={styles.boardTile}>
            <Card id={id} name={name} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

const Boards = () => {
  return (
    <div className={styles.container}>
      <section className={styles.boards}>
        <h1 className={styles.title}>YOUR BOARDS</h1>
        <List data={DATA} />
      </section>
    </div>
  );
};

export default Boards;
