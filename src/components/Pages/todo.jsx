import { TodoProvider } from "../../Contexts";
import { TodoTemplate } from "../Templates";

export const TodoPage = () => {
  return (
    <TodoProvider>
      <TodoTemplate />
    </TodoProvider>
  );
};
