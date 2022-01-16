import { render } from "@testing-library/react";

import InputWithLabel from "./InputWithLabel";

describe("InputWithLabel", () => {
  it("라벨을 렌더링합니다", () => {
    const { getByLabelText } = render(
      <InputWithLabel id="card-number" label="카드 번호">
        <input id="card-number" />
      </InputWithLabel>
    );

    expect(getByLabelText("카드 번호")).toBeInTheDocument("");
  });

  it("자식 컴포넌트를 렌더링합니다", () => {
    const { getByText } = render(
      <InputWithLabel label="카드 번호">
        <span>1</span>
        <span>2</span>
      </InputWithLabel>
    );

    expect(getByText("1")).toBeInTheDocument();
    expect(getByText("2")).toBeInTheDocument();
  });
});
