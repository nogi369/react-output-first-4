export const searchTodo = (todoList, keyword) => {
  todoList.filter((todo) => {
    // 第1引数 = 検索したい文字, 第2引数 = フラグ
    const regExp = new RegExp("^" + keyword, "i");
    todo.title.match(regExp);

    console.log(regExp);
  });
};
