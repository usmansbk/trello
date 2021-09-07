import Modal from "../common/Modal";
import styles from "./Details.module.css";

const Details = ({ visible, onDismiss }) => {
  return (
    <Modal visible={visible} onDismiss={onDismiss} contentLabel="Task details">
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <h2 className={styles.title}>
              User should be able to input template image
            </h2>
          </div>
        </header>
      </div>
    </Modal>
  );
};

export default Details;
