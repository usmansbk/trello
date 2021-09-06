import clsx from "clsx";
import { useState } from "react";
import IconButton from "../common/Button/IconButton";
import Icon from "../common/Icon";
import styles from "./AddColumn.module.css";

const Input = () => {
  return (
    <form className={styles.form}>
      <div className={styles.card}>
        <input
          autoFocus
          className={styles.textarea}
          placeholder="Enter list title..."
        />
      </div>
      <div className={styles.actions}>
        <button type="submit" className={styles.button}>
          Add list
        </button>
        <IconButton name="fa-times" />
      </div>
    </form>
  );
};

const AddColumn = () => {
  const [edit, setEdit] = useState(false);
  return !edit ? (
    <button
      className={clsx(styles.button, styles.container)}
      onClick={() => setEdit(!edit)}
    >
      <Icon
        name="fa-plus"
        className={clsx(styles.buttonText, styles.buttonIcon)}
      />
      <span className={styles.buttonText}>Add another list</span>
    </button>
  ) : (
    <Input />
  );
};

export default AddColumn;
