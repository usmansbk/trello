import { useState, memo } from "react";
import { useSelector } from "react-redux";
import TextareaAutosize from "react-textarea-autosize";
import Modal from "../common/Modal";
import Icon from "../common/Icon";
import styles from "./Details.module.css";

const Title = memo(({ title }) => {
  const [value, setValue] = useState(title);

  return (
    <TextareaAutosize
      spellCheck={false}
      value={value}
      className={styles.title}
      onChange={(e) => setValue(e.target.value)}
    />
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
  return (
    <TextareaAutosize
      className={styles.detailsInput}
      spellCheck={false}
      placeholder={placeholder}
    />
  );
});

const Details = memo(({ id, columnTitle, visible, onDismiss }) => {
  const task = useSelector((state) => state.tasks[id]);
  const { title } = task;

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
            <Title title={title} />
            <span>{columnTitle}</span>
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
