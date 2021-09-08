import Modal from "../common/Modal";
import Icon from "../common/Icon";
import Button from "../common/Button";
import styles from "./CreateBoard.module.css";

const CreateBoard = ({ visible, onDismiss }) => {
  return (
    <Modal
      visible={visible}
      onDismiss={onDismiss}
      contentLabel="Create a new board"
    >
      <div className={styles.container}>
        <div className={styles.form}>
          <div className={styles.top}>
            <input
              autoFocus
              className={styles.input}
              placeholder="Add board title"
            />
            <button onClick={onDismiss} className={styles.closeButton}>
              <Icon name="fa-times" className={styles.close} />
            </button>
          </div>
          <div className={styles.bottom}>
            <Button small value="Create board" disabled />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CreateBoard;
