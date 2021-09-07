import { memo, useCallback, useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import CreateBoard from "./CreateBoard";
import styles from "./Boards.module.css";
import { useSelector } from "react-redux";

const Details = memo(({ title }) => {
  return (
    <div className={styles.details}>
      <h3 className={styles.name}>{title}</h3>
    </div>
  );
});

const Tile = memo(({ id, title }) => {
  return (
    <div className={styles.item}>
      <Link to={`/${id}`} className={styles.tile}>
        <span className={styles.fade} />
        <Details id={id} title={title} />
      </Link>
    </div>
  );
});

const CreateBoardTile = memo(({ className }) => {
  const [isOpen, setOpen] = useState(false);
  const toggleModal = useCallback(() => setOpen((value) => !value), []);

  return (
    <div className={className}>
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
      <CreateBoardTile className={styles.item} />
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
