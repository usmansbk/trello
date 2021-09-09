import clsx from "clsx";
import Icon from "../Icon";
import styles from "./IconButton.module.css";

const IconButton = ({ name, onClick, className, text }) => {
  return (
    <button
      className={clsx(styles.button, !!text && styles.withText, className)}
      onClick={onClick}
    >
      <Icon name={name} />
      {!!text && <span className={styles.buttonText}>{text}</span>}
    </button>
  );
};

export default IconButton;
