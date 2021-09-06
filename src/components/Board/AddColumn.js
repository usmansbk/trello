import clsx from "clsx";
import { useState } from "react";
import CardButton from "../common/Button/CardButton";
import IconButton from "../common/Button/IconButton";
import Icon from "../common/Icon";
import styles from "./AddColumn.module.css";

const Input = ({ onCancel }) => {
  return (
    <form className={styles.form}>
      <input
        autoFocus
        className={styles.input}
        placeholder="Enter list title..."
      />
      <div className={styles.actions}>
        <CardButton text="Add list" onClick={onCancel} />
        <IconButton name="fa-times" onClick={onCancel} />
      </div>
    </form>
  );
};

const AddListButton = ({ onClick }) => (
  <button className={styles.button} onClick={onClick}>
    <Icon
      name="fa-plus"
      className={clsx(styles.buttonText, styles.buttonIcon)}
    />
    <span className={styles.buttonText}>Add another list</span>
  </button>
);

const AddColumn = () => {
  const [edit, setEdit] = useState(false);
  const toggleEdit = () => setEdit(!edit);

  return (
    <div className={clsx(styles.container, edit && styles.card)}>
      {!edit ? (
        <AddListButton onClick={toggleEdit} />
      ) : (
        <Input onCancel={toggleEdit} />
      )}
    </div>
  );
};

export default AddColumn;
