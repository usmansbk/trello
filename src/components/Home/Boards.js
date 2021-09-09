import { memo, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { Link } from "react-router-dom";
import CreateBoard from "./CreateBoard";
import styles from "./Boards.module.css";

const Tile = memo(({ id, title }) => {
  return (
    <div className={styles.item}>
      <Link to={`/${id}`} className={styles.tile}>
        <div className={styles.details}>
          <h3 className={styles.name}>{title}</h3>
        </div>
      </Link>
    </div>
  );
});

const CreateBoardTile = memo(() => {
  const [isOpen, setOpen] = useState(false);
  const toggleModal = useCallback(() => setOpen((value) => !value), []);

  return (
    <div className={clsx(styles.item, styles.button)}>
      <button
        onClick={toggleModal}
        className={clsx(styles.tile, styles.addButton)}
      >
        <div className={clsx(styles.details, styles.center)}>
          Create new board
        </div>
      </button>
      <CreateBoard visible={isOpen} onDismiss={toggleModal} />
    </div>
  );
});

const List = memo(() => {
  const boards = useSelector((state) => state.boards);

  return (
    <div className={styles.list}>
      {boards.byIds.map((boardId) => {
        const { id, title } = boards[boardId];

        return <Tile key={id} id={id} title={title} />;
      })}
      <CreateBoardTile />
    </div>
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
