import { expect, test } from "vitest";

import { addOne, newReader, parseId3v1 } from "./index";

test("10, add one, 11", () => {
  expect(addOne(10)).toBe(11);
});

test("parse id3v1", () => {
  const reader = newReader(new Uint8Array([0, 0, 0, 0, 0, 60, 41, 47]));
  expect(parseId3v1(reader)).toEqual({ header: "TAG" });
});
