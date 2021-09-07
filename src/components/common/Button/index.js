import clsx from "clsx";
import SocialButton from "./Social";
import styles from "./index.module.css";

const Button = ({ type = "button", value = "Button", disabled, small }) => {
  return (
    <input
      disabled={disabled}
      type={type}
      value={value}
      className={clsx(styles.button, small && styles.small)}
    />
  );
};

export { SocialButton };

export default Button;
