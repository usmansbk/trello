import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import IconButton from "../common/Button/IconButton";
import styles from "./AddCard.module.css";

const AddCard = ({ onCancel }) => {
  const [value, setValue] = useState("");

  return (
    <form className={styles.form} onSubmit={onCancel}>
      <div className={styles.card}>
        <TextareaAutosize
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoFocus
          onBlur={onCancel}
          className={styles.textarea}
          placeholder="Enter a title for this card..."
        />
      </div>
      <div className={styles.actions}>
        <button type="submit" className={styles.button}>
          Add card
        </button>
        <IconButton name="fa-times" onClick={onCancel} />
      </div>
    </form>
  );
};

export default AddCard;
