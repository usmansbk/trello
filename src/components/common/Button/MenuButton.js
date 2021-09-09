import { Link } from "react-router-dom";
import ReactToolTip from "react-tooltip";
import Icon from "../Icon";
import styles from "./MenuButton.module.css";

const MenuButton = ({ name, to, onClick, tooltip }) => {
  if (to) {
    return (
      <Link className={styles.menuButton} to={to} data-tip={tooltip}>
        <Icon name={name} className={styles.icon} />
        <ReactToolTip />
      </Link>
    );
  }

  return (
    <button className={styles.menuButton} onClick={onClick} data-tip={tooltip}>
      <Icon name={name} className={styles.icon} />
      <ReactToolTip />
    </button>
  );
};

export default MenuButton;
