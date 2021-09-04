import styles from "./social.module.css";

const Button = ({ text }) => {
  return (
    <button type="button" className={styles.button}>
      {text}
    </button>
  );
};

export default Button;
