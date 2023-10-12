import styles from "./styles.module.css";

export const TodoList = ({ todoList }) => {
  return (
    <div>
      <ul className={styles.list}>
        {todoList.map((todo) => (
          <li key={todo.id} className={styles.todo}>
            <span className={styles.task}>{todo.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
