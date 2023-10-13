import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export const TodoList = ({ todoList, handleDeleteTodo }) => {
  return (
    <div>
      <ul className={styles.list}>
        {todoList.map((todo) => (
          <li key={todo.id} className={styles.todo}>
            <span className={styles.task}>{todo.title}</span>
            <FontAwesomeIcon
              className={styles.far}
              icon={faTrashAlt}
              size="lg"
              onClick={() => handleDeleteTodo(todo.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
