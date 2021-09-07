import { useState, useCallback, memo } from "react";
import clsx from "clsx";
import TextareaAutosize from "react-textarea-autosize";
import Modal from "../common/Modal";
import Icon from "../common/Icon";
import styles from "./Details.module.css";

const Title = memo(({ title }) => {
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
          className={clsx(styles.title, styles.editTitle)}
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        <h2 onClick={toggleEdit} className={styles.title}>
          {value}
        </h2>
      )}
    </div>
  );
});

const Subtitle = memo(({ title, icon }) => {
  return (
    <div className={styles.header}>
      <Icon name={icon} className={styles.icon} />
      <h2 className={styles.subtitle}>{title}</h2>
    </div>
  );
});

const DetailsInput = memo(({ placeholder }) => {
  const [edit, setEdit] = useState(false);

  const toggleEdit = useCallback(() => setEdit((mode) => !mode), []);

  return edit ? (
    <TextareaAutosize
      onBlur={toggleEdit}
      className={styles.detailsInput}
      autoFocus
      spellCheck={false}
      placeholder={placeholder}
    />
  ) : (
    <p onClick={toggleEdit} className={styles.placeholder}>
      {placeholder}
    </p>
  );
});

const Details = memo(({ visible, onDismiss }) => {
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
          <div className={styles.headerContent}>
            <Title title="User should be able to input template image" />
            <span>in list {listTitle}</span>
          </div>
          <button className={styles.closeButton} onClick={onDismiss}>
            <Icon name="fa-times" />
          </button>
        </header>
        <div>
          <Subtitle icon="fa-align-left" title="Description" />
          <div className={styles.gutter}>
            <DetailsInput placeholder="Add a more detailed description..." />
          </div>
        </div>
      </div>
    </Modal>
  );
});

export default Details;
