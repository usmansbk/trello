import { Link } from "react-router-dom";
import Icon from "../Icon";
import styles from "./Menu.module.css";

const IconButton = ({ name, link, to }) => {
  if (link) {
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

export default IconButton;
