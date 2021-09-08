import styles from "./CardButton.module.css";

const CardButton = ({ text, onClick, type }) => {
  return (
    <button onClick={onClick} type={type} className={styles.button}>
      {text}
    </button>
  );
};

export default CardButton;
