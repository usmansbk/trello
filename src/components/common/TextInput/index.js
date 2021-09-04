import styles from "./index.module.css";

const TextInput = ({
  placeholder,
  type = "text",
  value,
  onChange,
  ...rest
}) => {
  return (
    <div className={styles.container}>
      <input
        placeholder={placeholder}
        type={type}
        className={styles.input}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};

export default TextInput;
