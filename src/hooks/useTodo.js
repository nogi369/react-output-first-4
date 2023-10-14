import { useMemo, useState } from "react";
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "../constants/data";

export const useTodo = () => {
  const [originTodoList, setOriginTodoList] = useState(INIT_TODO_LIST);
  const [addInputValue, setAddInputValue] = useState("");
  const [uniqueId, setUniqueId] = useState(INIT_UNIQUE_ID);
  const [searchKeyword, setSearchKeyword] = useState("");
  // 表示用Todoリスト
  const showTodoList = useMemo(() => {
    return originTodoList.filter((todo) => {
      const regExp = new RegExp("^" + searchKeyword, "i");
      return todo.title.match(regExp);
    });
  }, [originTodoList, searchKeyword]);

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

  const handleChangeSearchKeyword = (e) => setSearchKeyword(e.target.value);

  const states = { addInputValue, searchKeyword, showTodoList };
  const actions = {
    hendleAddTodo,
    onChangeAddInputValue,
    handleChangeSearchKeyword,
    handleDeleteTodo,
  };

  return [states, actions];
};
