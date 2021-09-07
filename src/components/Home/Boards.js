import { memo, useCallback, useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import CreateBoard from "./CreateBoard";
import styles from "./Boards.module.css";
import { useSelector } from "react-redux";

const Tile = memo(({ title }) => {
  return (
    <div className={styles.details}>
      <h3 className={styles.name}>{title}</h3>
    </div>
  );
});

const CreateBoardButton = memo(() => {
  const [isOpen, setOpen] = useState(false);
  const toggleModal = useCallback(() => setOpen((value) => !value), []);

  return (
    <>
      <button
        onClick={toggleModal}
        className={clsx(
          styles.tile,
          styles.addButton,
          styles.details,
          styles.center
        )}
      >
        Create new board
      </button>
      <CreateBoard visible={isOpen} onDismiss={toggleModal} />
    </>
  );
});

const List = memo(() => {
  const data = useSelector((state) => Object.values(state.boards));

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
        <CreateBoardButton />
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
