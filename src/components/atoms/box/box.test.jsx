import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Box from ".";

describe("Box 테스트", () => {
  it("label 태그를 넣었을 때 label 태그로 렌더링된다", () => {
    render(<Box as="label"></Box>);

    const box = document.querySelector("label");
    expect(box).toBeTruthy();
  });

  it("클래스를 넣었을 때 컴포넌트에 반영이 된다.", () => {
    render(<Box as="div" className="empty-card"></Box>);

    const box = document.querySelector(".empty-card");
    expect(box).toBeTruthy();
  });

  it("여러 스타일 클래스를 적용할 수 있다.", () => {
    render(<Box as="div" className={["empty-card", "card"]}></Box>);

    const box = document.querySelector(".empty-card.card");
    expect(box).toBeTruthy();
  });
});
