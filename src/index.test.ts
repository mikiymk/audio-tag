import { expect, test } from "vitest";

import addOne from "./index";

test("add one", () => {
  expect(addOne(10)).toBe(11);
});
