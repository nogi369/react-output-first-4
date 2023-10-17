import { renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { useTodo } from "./useTodo";
import { act } from "react-dom/test-utils";
import { INIT_TODO_LIST } from "../constants/data";

// テストファイル全体を定義
describe("【hooksテスト】useApp test", () => {
  // テストする関数を定義
  describe("【関数テスト】onChangeAddInputValue", () => {
    // テストで確認すること
    test("【正常系】addInpuValueを更新できること", () => {
      // 期待値(テストで使用するデータ)
      const expectValue = "テスト";
      // 引数(テストデータオブジェクトを定義)
      const eventObject = {
        target: {
          value: expectValue,
        },
      };

      const { result } = renderHook(() => useTodo());
      expect(result.current[0].addInputValue).toBe("");
      act(() => result.current[1].onChangeAddInputValue(eventObject));
      expect(result.current[0].addInputValue).toBe(expectValue);
    });
  });
  describe("【関数テスト】handleAddTodo", () => {
    // 期待値
    let expectTodoList = [];
    // 引数
    let eventObject = {
      target: {
        value: "テスト",
      },
      key: "Enter",
    };
    beforeEach(() => {
      eventObject = {
        target: {
          value: "テスト",
        },
        key: "Enter",
      };
    });
    test("【正常系】todoList, uniqueIdが更新されること、addInputValueがリセットされること", () => {
      const expectTodoTitle = "Todo3";
      expectTodoList = INIT_TODO_LIST.concat({
        id: 3,
        title: expectTodoTitle,
      });
      eventObject.target.value = expectTodoTitle;

      const { result } = renderHook(() => useTodo());
      expect(result.current[0].addInputValue).toBe("");
      act(() => result.current[1].onChangeAddInputValue(eventObject));
      expect(result.current[0].addInputValue).toBe(expectTodoTitle);
      act(() => result.current[1].handleAddTodo(eventObject));
      expect(result.current[0].showTodoList).toEqual(expectTodoList);
      expect(result.current[0].addInputValue).toBe("");
    });
    test("【正常系】エンターキーを押していない場合、処理が発生しないこと", () => {
      const expectTodoTitle = "Todo4";
      expectTodoList = INIT_TODO_LIST.concat({
        id: 3,
        title: expectTodoTitle,
      });
      eventObject.target.value = expectTodoTitle;
      eventObject.key = "";

      const { result } = renderHook(() => useTodo());
      expect(result.current[0].addInputValue).toBe("");
      act(() => result.current[1].onChangeAddInputValue(eventObject));
      expect(result.current[0].addInputValue).toBe(expectTodoTitle);
      act(() => result.current[1].handleAddTodo(eventObject));
      expect(result.current[0].showTodoList).not.toEqual(expectTodoList);
      expect(result.current[0].addInputValue).not.toBe("");
    });
    test("【正常系】入力値がない場合、処理が発生しないこと", () => {
      const expectTodoTitle = "Todo5";
      expectTodoList = INIT_TODO_LIST.concat({
        id: 3,
        title: expectTodoTitle,
      });
      eventObject.target.value = "";
      eventObject.key = "";

      const { result } = renderHook(() => useTodo());
      expect(result.current[0].addInputValue).toBe("");
      act(() => result.current[1].onChangeAddInputValue(eventObject));
      expect(result.current[0].addInputValue).toBe("");
      act(() => result.current[1].handleAddTodo(eventObject));
      expect(result.current[0].showTodoList).not.toEqual(expectTodoList);
    });
  });
  describe("【関数テスト】handleDeleteTodo", () => {
    let expectTodoList = [];
    beforeEach(() => {
      expectTodoList = [];
    });
    test("【正常系】todoが削除されること", () => {
      const targetId = 1;
      const targetTitle = "テスト";
      // window.confirm = vi.fn().mockReturnValueOnce(() => true);
      window.confirm = vi.fn().mockReturnValueOnce(true);
      expectTodoList = INIT_TODO_LIST.filter((todo) => todo.id !== targetId);
      const { result } = renderHook(() => useTodo());
      act(() => result.current[1].handleDeleteTodo(targetId, targetTitle));
      expect(result.current[0].showTodoList).toEqual(expectTodoList);
    });
    test("【正常系】confirmでキャンセルをクリックした場合、todoが削除されないこと", () => {
      const targetId = 1;
      const targetTitle = "テスト";
      // window.confirm = vi.fn().mockReturnValueOnce(false);
      window.confirm = vi.fn().mockImplementationOnce(() => false);
      expectTodoList = INIT_TODO_LIST;
      const { result } = renderHook(() => useTodo());
      act(() => result.current[1].handleDeleteTodo(targetId, targetTitle));
      expect(result.current[0].showTodoList).toEqual(expectTodoList);
    });
  });
  describe("【関数テスト】handleChangeSearchKeyword", () => {
    test("【正常系】検索ワードがある場合、検索された結果が反映される", () => {
      const expectValue = [INIT_TODO_LIST[0]];
      const eventObject = {
        target: {
          value: "Todo1",
        },
      };
      const { result } = renderHook(() => useTodo());
      act(() => result.current[1].handleChangeSearchKeyword(eventObject));
      expect(result.current[0].showTodoList).toEqual(expectValue);
    });
    test("【正常系】検索ワードがない場合、元のTodoリストが反映される", () => {
      const expectValue = INIT_TODO_LIST;
      const eventObject = {
        target: {
          value: "",
        },
      };
      const { result } = renderHook(() => useTodo());
      act(() => result.current[1].handleChangeSearchKeyword(eventObject));
      expect(result.current[0].showTodoList).toEqual(expectValue);
    });
  });
});

// 入力値の変更処理
// addInputValueを更新できること

// 新規登録処理
// todoList, uniqueIdが更新されること、addInputValueがリセットされること

// エンターキーを押していない場合、処理が発生しないこと

// 入力値がない場合、処理が発生しないこと

// 削除
// todoが削除されること

// confirmでキャンセルをクリックした場合、todoが削除されないこと

// 検索ワードがある場合、検索された結果が反映される

// 検索ワードがない場合、元のTodoリストが反映される
