import { Link } from "react-router-dom";
import Icon from "../Icon";
import styles from "./MenuButton.module.css";

const MenuButton = ({ name, to }) => {
  if (to) {
    return (
      <Link className={styles.menuButton} to={to}>
        <Icon name={name} className={styles.icon} />
      </Link>
    );
  }

  return (
    <button className={styles.menuButton}>
      <Icon name={name} className={styles.icon} />
    </button>
  );
};

export default MenuButton;
