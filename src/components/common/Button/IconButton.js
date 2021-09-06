import clsx from "clsx";
import Icon from "../Icon";
import styles from "./IconButton.module.css";

const IconButton = ({ name, onClick, className }) => {
  return (
    <button className={clsx(styles.button, className)} onClick={onClick}>
      <Icon name={name} />
    </button>
  );
};

export default IconButton;
