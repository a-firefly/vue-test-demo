import { describe, expect, test } from "vitest";
import { increment } from "./index";

describe("test increment", () => {
  test("increment 1 to be 2", ()=> {
    expect(increment(1)).toBe(2)
  })
})
