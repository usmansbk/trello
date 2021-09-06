import clsx from "clsx";
import Icon from "../common/Icon";
import styles from "./AddColumn.module.css";

const AddColumn = () => {
  return (
    <button className={clsx(styles.button, styles.container)}>
      <Icon
        name="fa-plus"
        className={clsx(styles.buttonText, styles.buttonIcon)}
      />
      <span className={styles.buttonText}>Add another list</span>
    </button>
  );
};

export default AddColumn;
