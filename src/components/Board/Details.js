import { useState } from "react";
import Modal from "../common/Modal";
import Icon from "../common/Icon";
import styles from "./Details.module.css";
import { useCallback } from "react";
import TextareaAutosize from "react-textarea-autosize";

const Title = ({ title }) => {
  const [value, setValue] = useState(title);
  const [edit, setEdit] = useState(false);

  const toggleEdit = useCallback(() => setEdit((mode) => !mode), []);

  return (
    <div className={styles.titleContainer}>
      {edit ? (
        <TextareaAutosize
          autoFocus
          spellCheck={false}
          value={value}
          onBlur={toggleEdit}
          className={styles.editTitle}
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        <h2 onClick={toggleEdit} className={styles.title}>
          {value}
        </h2>
      )}
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
    <Modal
      className={styles.modal}
      visible={visible}
      onDismiss={onDismiss}
      contentLabel="Task details"
    >
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
