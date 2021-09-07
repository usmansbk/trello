import Modal from "../common/Modal";
import styles from "./index.module.css";

const Details = ({ visible, onDismiss }) => {
  return (
    <Modal visible={visible} onDismiss={onDismiss} contentLabel="Task details">
      <div className={styles.container}>
        <h1>Details</h1>
      </div>
    </Modal>
  );
};

export default Details;
