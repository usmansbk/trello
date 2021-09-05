import styles from "./index.module.css";

const Board = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.board}>
          <ul className={styles.columns}></ul>
        </div>
      </div>
    </div>
  );
};

export default Board;
