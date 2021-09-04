import styles from "./social.module.css";
import google from "./google.svg";

const Button = ({ text }) => {
  return (
    <button type="button" className={styles.button}>
      <img src={google} alt="" className={styles.icon} />
      {text}
    </button>
  );
};

export default Button;
