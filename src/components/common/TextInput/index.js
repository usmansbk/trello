import styles from "./index.module.css";

const TextInput = ({ placeholder, type = "text" }) => {
  return (
    <div className={styles.container}>
      <input placeholder={placeholder} type={type} className={styles.input} />
    </div>
  );
};

export default TextInput;
