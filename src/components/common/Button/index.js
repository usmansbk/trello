import styles from "./index.module.css";

const Button = ({ type = "button", value = "Button" }) => {
  return <input type={type} value={value} className={styles.button} />;
};

export default Button;
