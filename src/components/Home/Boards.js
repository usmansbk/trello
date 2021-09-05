import clsx from "clsx";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import styles from "./Boards.module.css";

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
    name: "React Capstone project",
  },
  {
    id: nanoid(),
    name: "React Group project",
  },
];

const Tile = ({ name }) => {
  return (
    <div className={styles.details}>
      <h3 className={styles.name}>{name}</h3>
    </div>
  );
};

const List = ({ data = [] }) => {
  return (
    <ul className={styles.list}>
      {data.map(({ id, name }) => (
        <li key={id} className={styles.item}>
          <Link to={`/${id}`} className={styles.tile}>
            <span className={styles.fade} />
            <Tile id={id} name={name} />
          </Link>
        </li>
      ))}
      <li className={styles.item}>
        <div className={clsx(styles.tile, styles.add)}>
          <p className={styles.label}>Create new board</p>
        </div>
      </li>
    </ul>
  );
};

const Boards = () => {
  return (
    <div className={styles.container}>
      <section className={styles.content}>
        <h1 className={styles.title}>YOUR BOARDS</h1>
        <List data={DATA} />
      </section>
    </div>
  );
};

export default Boards;
