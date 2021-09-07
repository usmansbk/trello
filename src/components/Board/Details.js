import Modal from "../common/Modal";
import Icon from "../common/Icon";
import styles from "./Details.module.css";

const Title = ({ title }) => {
  return (
    <div className={styles.titleContainer}>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};

const Details = ({ visible, onDismiss }) => {
  return (
    <Modal visible={visible} onDismiss={onDismiss} contentLabel="Task details">
      <div className={styles.container}>
        <header className={styles.header}>
          <Icon name="fa-credit-card" className={styles.icon} />
          <Title title="User should be able to input template image" />
        </header>
      </div>
    </Modal>
  );
};

export default Details;
