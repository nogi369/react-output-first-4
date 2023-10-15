import { renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useTodo } from "./useTodo";
import { act } from "react-dom/test-utils";

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
  describe("【関数テスト】hendleAddTodo", () => {
    test("【正常系】todoList, uniqueIdが更新されること、addInputValueがリセットされること", () => {});
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
