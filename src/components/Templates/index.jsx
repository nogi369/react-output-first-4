import { useState } from "react";
import { INIT_TODO_LIST } from "../../constants/data";
import { TodoList } from "../Organisms/TodoList";
import styles from "./styles.module.css";

export const TodoTemplate = () => {
  const [originTodoList, setOriginTodoList] = useState(INIT_TODO_LIST);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo List</h1>
      <section className={styles.common}>
        <TodoList todoList={originTodoList} />
      </section>
    </div>
  );
};
