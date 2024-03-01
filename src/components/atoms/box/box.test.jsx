import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Box from ".";

describe("Box 테스트", () => {
  it("태그 변경 적용", () => {
    render(<Box as="label"></Box>);

    const box = document.querySelector("label");
    expect(box).toBeTruthy();
  });

  it("스타일 클래스 적용", () => {
    render(<Box as="div" className="empty-card"></Box>);

    const box = document.querySelector(".empty-card");
    expect(box).toBeTruthy();
  });

  it("여러 스타일 클래스 적용", () => {
    render(<Box as="div" className={["empty-card", "card"]}></Box>);

    const box = document.querySelector(".empty-card.card");
    expect(box).toBeTruthy();
  });
});
