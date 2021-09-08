import Modal from "./";
import Icon from "../Icon";
import Button from "../Button";
import styles from "./Confirm.module.css";

const Confirm = ({
  visible,
  onDismiss,
  title,
  buttonText = "Yes",
  onConfirm,
}) => {
  return (
    <Modal visible={visible} onDismiss={onDismiss} contentLabel={title}>
      <div className={styles.container}>
        <div className={styles.content}>
          <button onClick={onDismiss} className={styles.closeButton}>
            <Icon name="fa-times" className={styles.close} />
          </button>
          <div className={styles.form}>
            <div className={styles.top}>
              <h1 className={styles.title}>{title}</h1>
            </div>
            <div className={styles.bottom}>
              <Button small value={buttonText} onClick={onConfirm} />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Confirm;
