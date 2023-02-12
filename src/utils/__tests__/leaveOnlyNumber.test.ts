import { describe } from "vitest";
import leaveOnlyNumber from "../leaveOnlyNumber";

describe("leaveOnlyNumber", () => {
  it.each([
    { input: "adsfdrqwd", expected: "" },
    { input: "1q2w3e", expected: "123" },
    { input: "123qwe", expected: "123" },
    { input: "qwe123", expected: "123" },
    { input: "한1글2!3@#4", expected: "1234" },
  ])(
    "$input을 입력 받으면 숫자가 아닌 것을 제거한 $expected를 반환한다.",
    ({ input, expected }) => {
      expect(leaveOnlyNumber(input)).equal(expected);
    }
  );
});
