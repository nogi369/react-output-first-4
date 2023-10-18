import { TodoList } from "../Organisms/TodoList";
import styles from "./styles.module.css";
import { AddTodo } from "../Organisms/AddTodo";
import { InputForm } from "../atoms/InputForm";
import { useTodoContext } from "../../Contexts";

export const TodoTemplate = () => {
  const {
    addInputValue,
    searchKeyword,
    showTodoList,
    handleAddTodo,
    onChangeAddInputValue,
    handleChangeSearchKeyword,
    handleDeleteTodo,
  } = useTodoContext();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo List</h1>
      <section className={styles.common}>
        <AddTodo
          addInputValue={addInputValue}
          handleAddTodo={handleAddTodo}
          onChnageTodo={onChangeAddInputValue}
        />
      </section>
      <section className={styles.common}>
        <InputForm
          handleChangeValue={handleChangeSearchKeyword}
          inputValue={searchKeyword}
          placeholder={"Search Keyword"}
        />
      </section>
      <section className={styles.common}>
        {showTodoList.length > 0 && (
          <TodoList
            todoList={showTodoList}
            handleDeleteTodo={handleDeleteTodo}
          />
        )}
      </section>
    </div>
  );
};
