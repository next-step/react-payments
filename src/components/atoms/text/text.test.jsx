import { describe, expect, it } from "vitest";
import Text from ".";
import { render } from "@testing-library/react";

describe("Text 테스트", () => {
  it("특정 태그를 넣었을 때 해당 태그로 렌더링된다", () => {
    render(<Text as="h1"></Text>);

    const box = document.querySelector("h1");
    expect(box).toBeTruthy();
  });

  it("클래스를 넣었을 때 컴포넌트에 반영이 된다.", () => {
    render(<Text as="p" className="empty-card"></Text>);

    const box = document.querySelector(".empty-card");
    expect(box).toBeTruthy();
  });

  it("여러 스타일 클래스를 적용할 수 있다.", () => {
    render(<Text as="p" className={["empty-card", "card"]}></Text>);

    const box = document.querySelector(".empty-card.card");
    expect(box).toBeTruthy();
  });
});
