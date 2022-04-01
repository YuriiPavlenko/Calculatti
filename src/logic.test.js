import { drobvroteyeebat } from "./logic.js";

test("drob adds . if no . present", () => {
  expect(drobvroteyeebat(".", "17")).toBe("17.");
});
