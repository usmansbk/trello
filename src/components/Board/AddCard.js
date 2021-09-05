import IconButton from "../common/Button/IconButton";
import styles from "./AddCard.module.css";

const AddCard = () => {
  return (
    <form>
      <textarea placeholder="Enter a title for this card..."></textarea>
      <div>
        <button className={styles.button}>Add card</button>
        <IconButton name="fa-times" />
      </div>
    </form>
  );
};

export default AddCard;
