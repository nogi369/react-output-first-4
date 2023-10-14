import { describe, expect, it } from "vitest";
import { add } from "./add";

// テストする対象
describe("add", () => {
  // テストで期待する結果
  it("1 + 2 = 3", () => {
    // 関数addに1, 2を渡す
    const result = add(1, 2);

    expect(result).toBe(3);
  });
});
