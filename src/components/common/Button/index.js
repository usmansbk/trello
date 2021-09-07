import SocialButton from "./Social";
import styles from "./index.module.css";

const Button = ({ type = "button", value = "Button", disabled }) => {
  return (
    <input
      disabled={disabled}
      type={type}
      value={value}
      className={styles.button}
    />
  );
};

export { SocialButton };

export default Button;
