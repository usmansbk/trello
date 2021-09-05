import IconButton from "../common/Button/IconButton";
import styles from "./AddCard.module.css";

const AddCard = ({ onCancel }) => {
  return (
    <form className={styles.form}>
      <div className={styles.card}>
        <textarea
          className={styles.textarea}
          placeholder="Enter a title for this card..."
        ></textarea>
      </div>
      <div>
        <button className={styles.button}>Add card</button>
        <IconButton name="fa-times" onClick={onCancel} />
      </div>
    </form>
  );
};

export default AddCard;
