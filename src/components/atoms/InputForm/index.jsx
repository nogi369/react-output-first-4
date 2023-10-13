import styles from "./styles.module.css";

export const InputForm = ({
  handleChangeValue,
  handleKeyDown,
  inputValue,
  placeholder,
}) => {
  return (
    <input
      className={styles.input}
      type="text"
      onChange={handleChangeValue}
      onKeyDown={handleKeyDown}
      value={inputValue}
      placeholder={placeholder}
    />
  );
};
