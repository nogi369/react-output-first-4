import { renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import { useTodo } from "./useTodo";
import { act } from "react-dom/test-utils";
import { INIT_TODO_LIST } from "../constants/data";

// テストファイル全体を定義
describe("【hooksテスト】useApp test", () => {
  // テストする関数を定義
  describe("【関数テスト】onChangeAddInputValue", () => {
    // テストで確認すること
    test("【正常系】addInpuValueを更新できること", () => {
      // テストで使用するデータを用意
      const expectValue = "テスト";
      // テストデータオブジェクトの定義
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
      expect(result.current[0].addInputValue).toBe(expectTodoTitle);
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
