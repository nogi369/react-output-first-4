import { InputForm } from "../../atoms/InputForm";
import styles from "./styles.module.css";

export const AddTodo = ({ addInputValue, handleAddTodo, onChnageTodo }) => {
  return (
    <>
      <h2 className={styles.subTitle}>ADD TODO</h2>
      <InputForm
        handleChangeValue={onChnageTodo}
        handleKeyDown={handleAddTodo}
        inputValue={addInputValue}
        placeholder={"New Todo"}
      />
    </>
  );
};

// InputForm
// onChange={handleChangeValue}
// onKeyDown={handleKeyDown}
// value={inputValue}
// placeholder={placeholder}
