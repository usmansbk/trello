import clsx from "clsx";
import Icon from "../Icon";
import styles from "./IconButton.module.css";

const IconButton = ({ name, onClick, className, text, color, danger }) => {
  return (
    <button
      className={clsx(
        styles.button,
        !!text && styles.withText,
        danger && styles.danger,
        className
      )}
      onClick={onClick}
    >
      <Icon name={name} color={color} />
      {!!text && (
        <span className={styles.buttonText} style={{ color }}>
          {text}
        </span>
      )}
    </button>
  );
};

export default IconButton;
