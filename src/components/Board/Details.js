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

const Subtitle = ({ title, icon }) => {
  return (
    <div className={styles.header}>
      <Icon name={icon} className={styles.icon} />
      <h2 className={styles.subtitle}>{title}</h2>
    </div>
  );
};

const Details = ({ visible, onDismiss }) => {
  const listTitle = "Todo";
  return (
    <Modal visible={visible} onDismiss={onDismiss} contentLabel="Task details">
      <div className={styles.container}>
        <header className={styles.header}>
          <Icon name="fa-pen-alt" className={styles.icon} />
          <div>
            <Title title="User should be able to input template image" />
            <span>in list {listTitle}</span>
          </div>
          <button className={styles.closeButton} onClick={onDismiss}>
            <Icon name="fa-times" />
          </button>
        </header>
        <div>
          <Subtitle icon="fa-align-left" title="Description" />
        </div>
      </div>
    </Modal>
  );
};

export default Details;
