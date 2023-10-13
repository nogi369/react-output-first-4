import { useState } from "react";
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "../../constants/data";
import { TodoList } from "../Organisms/TodoList";
import styles from "./styles.module.css";
import { AddTodo } from "../Organisms/AddTodo";

export const TodoTemplate = () => {
  const [originTodoList, setOriginTodoList] = useState(INIT_TODO_LIST);
  const [addInputValue, setAddInputValue] = useState("");
  const [uniqueId, setUniqueId] = useState(INIT_UNIQUE_ID);

  const onChangeAddInputValue = (e) => setAddInputValue(e.target.value);

  const hendleAddTodo = (e) => {
    // 入力フォームが空文字でない かつ Enterキーが押された場合
    if (addInputValue !== "" && e.key === "Enter") {
      const nextUniqueId = uniqueId + 1;

      // Todoを新規登録する
      const newTodoList = [
        ...originTodoList,
        {
          id: nextUniqueId,
          title: addInputValue,
        },
      ];

      setUniqueId(nextUniqueId);
      setOriginTodoList(newTodoList);
      setAddInputValue("");
    }
  };

  const handleDeleteTodo = (targetId, targetTitle) => {
    if (window.confirm(`「${targetTitle}」のtodoを削除しますか？`)) {
      const newTodos = originTodoList.filter((todo) => todo.id !== targetId);

      setOriginTodoList(newTodos);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo List</h1>
      <section className={styles.common}>
        <AddTodo
          addInputValue={addInputValue}
          handleAddTodo={hendleAddTodo}
          onChnageTodo={onChangeAddInputValue}
        />
      </section>
      <section className={styles.common}>
        <TodoList
          todoList={originTodoList}
          handleDeleteTodo={handleDeleteTodo}
        />
      </section>
    </div>
  );
};
