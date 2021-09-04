import styles from "./index.module.css";

const Label = ({ text, id, htmlFor }) => {
  return (
    <label className={styles.label} id={id} htmlFor={htmlFor}>
      {text}
    </label>
  );
};

export default Label;
