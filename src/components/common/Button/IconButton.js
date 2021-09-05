import Icon from "../Icon";
import styles from "./IconButton.module.css";

const IconButton = ({ name }) => {
  return (
    <button className={styles.button}>
      <Icon name={name} />
    </button>
  );
};

export default IconButton;
