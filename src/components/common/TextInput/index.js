import styles from "./index.module.css";

const TextInput = ({ placeholder, type = "text", value, onChange }) => {
  return (
    <div className={styles.container}>
      <input
        placeholder={placeholder}
        type={type}
        className={styles.input}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
