import Modal from "react-modal";
import IconButton from "../common/Button/IconButton";
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
      style={{
        overlay: {
          backgroundColor: `rgba(0,0, 0, 0.75)`,
        },
        content: {
          background: "transparent",
          border: "none",
          margin: "48px 0",
        },
      }}
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
