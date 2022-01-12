import { render, fireEvent } from "@testing-library/react";

import { Input } from "./BasicInput.stories.js";

describe("BasicInput", () => {
  const handleChange = jest.fn();

  const makeInput = () =>
    render(
      <Input
        type="text"
        id="input"
        name="basic-input"
        value="하이"
        placeholder="텍스트를 입력하세요"
        onChange={handleChange}
      />
    );

  it("Input을 렌더링합니다", () => {
    const { getByPlaceholderText } = makeInput();

    expect(getByPlaceholderText("텍스트를 입력하세요")).toHaveValue("하이");
  });

  it("값이 변경되면 onChange Handler가 실행됩니다", () => {
    const { getByPlaceholderText } = makeInput();

    fireEvent.change(getByPlaceholderText("텍스트를 입력하세요"), {
      target: {
        value: "값을 변경합니다",
      },
    });

    expect(handleChange).toBeCalledWith({
      name: "basic-input",
      value: "값을 변경합니다",
    });
  });
});
