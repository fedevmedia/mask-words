import { maskWords } from ".";

test("Mask blacklisted words to asterisks", () =>
  expect(
    maskWords("This is Apple Macbook Pro. This is Macbook", ["macbook", "pro"])
  ).toBe("This is Apple ***** *****. This is *****"));
