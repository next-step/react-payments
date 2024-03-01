import { describe, expect, it } from "vitest";
import Text from ".";
import { render } from "@testing-library/react";

describe("Text 테스트", () => {
  it("태그 변경 적용", () => {
    render(<Text as="h1"></Text>);

    const box = document.querySelector("h1");
    expect(box).toBeTruthy();
  });

  it("스타일 클래스 적용", () => {
    render(<Text as="p" className="empty-card"></Text>);

    const box = document.querySelector(".empty-card");
    expect(box).toBeTruthy();
  });

  it("여러 스타일 클래스 적용", () => {
    render(<Text as="p" className={["empty-card", "card"]}></Text>);

    const box = document.querySelector(".empty-card.card");
    expect(box).toBeTruthy();
  });
});
