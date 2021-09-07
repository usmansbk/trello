import { memo } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import styles from "./Boards.module.css";
import initialData from "../initialData";

const Tile = memo(({ title }) => {
  return (
    <div className={styles.details}>
      <h3 className={styles.name}>{title}</h3>
    </div>
  );
});

const CreateBoard = () => {
  return (
    <button className={clsx(styles.tile, styles.addButton)}>
      <div className={clsx(styles.details, styles.center)}>
        <p className={styles.label}>Create new board</p>
      </div>
    </button>
  );
};

const List = memo(() => {
  const data = Object.values(initialData.boards);
  return (
    <ul className={styles.list}>
      {data.map(({ id, title }) => (
        <li key={id} className={styles.item}>
          <Link to={`/${id}`} className={styles.tile}>
            <span className={styles.fade} />
            <Tile id={id} title={title} />
          </Link>
        </li>
      ))}
      <li className={styles.item}>
        <CreateBoard />
      </li>
    </ul>
  );
});

const Boards = memo(() => {
  return (
    <div className={styles.container}>
      <section className={styles.content}>
        <h1 className={styles.title}>YOUR BOARDS</h1>
        <List />
      </section>
    </div>
  );
});

export default Boards;
