import styles from "./CardButton.module.css";

const CardButton = ({ text, onClick }) => {
  return (
    <button onClick={onClick} type="submit" className={styles.button}>
      {text}
    </button>
  );
};

export default CardButton;
