import Icon from "../Icon";
import styles from "./IconButton.module.css";

const IconButton = ({ name, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <Icon name={name} />
    </button>
  );
};

export default IconButton;
