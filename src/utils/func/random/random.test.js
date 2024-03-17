import { describe, expect, it } from "vitest";
import random from ".";

describe("랜덤 생성 함수 테스트", () => {
  it("5를 매개변수로 넘겼을 때, 5자리 랜덤 값이 넘어옴", () => {
    const value = random(5);

    expect(value.length).toBe(5);
  });

  it("랜덤 생성한 값이 매번 다름", () => {
    const value1 = random(5);
    const value2 = random(5);

    expect(value1).not.toEqual(value2);
  });
});
