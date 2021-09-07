import Modal from "react-modal";
import Icon from "../common/Icon";
import styles from "./CreateBoard.module.css";

const CreateBoard = ({ visible, onDismiss }) => {
  return (
    <Modal
      isOpen={visible}
      onRequestClose={onDismiss}
      contentLabel="Create a new board"
      preventScroll
      ariaHideApp={false}
      className={styles.root}
      overlayClassName={styles.overlay}
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
        </div>
      </div>
    </Modal>
  );
};

export default CreateBoard;
