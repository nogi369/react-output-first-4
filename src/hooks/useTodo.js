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

  // 入力値の変更処理
  const onChangeAddInputValue = (e) => setAddInputValue(e.target.value);

  // Todo新規登録処理
  const handleAddTodo = (e) => {
    // 入力フォームが空文字でない かつ Enterキーが押された場合
    if (addInputValue !== "" && e.key === "Enter") {
      const nextUniqueId = uniqueId + 1;

      // 追加するTodoデータ
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

  // Todo削除処理
  const handleDeleteTodo = (targetId, targetTitle) => {
    if (window.confirm(`「${targetTitle}」のtodoを削除しますか？`)) {
      const newTodos = originTodoList.filter((todo) => todo.id !== targetId);

      setOriginTodoList(newTodos);
    }
  };

  // 検索キーワード変更処理
  const handleChangeSearchKeyword = (e) => setSearchKeyword(e.target.value);

  return {
    addInputValue,
    searchKeyword,
    showTodoList,
    handleAddTodo,
    onChangeAddInputValue,
    handleChangeSearchKeyword,
    handleDeleteTodo,
  };
};
