import { fireEvent, render } from "@testing-library/react";

import Input from "./Input";

describe("Input", () => {
  const handleChange = jest.fn();

  const initialField = {
    id: "expiry-date",
    ariaLabel: "월 2자리",
    ref: null,
    type: "password",
    name: "monthField",
    placeholder: "MM",
    value: "12",
  };

  const makeInput = ({ field = initialField } = {}) =>
    render(<Input field={field} onChange={handleChange} />);

  it("Input을 렌더링합니다", () => {
    const { queryByLabelText } = makeInput();
    const input = queryByLabelText("월 2자리");

    expect(input).toBeInTheDocument();
    expect(input.getAttribute("id")).toBe("expiry-date");
    expect(input.getAttribute("type")).toBe("password");
    expect(input.getAttribute("name")).toBe("monthField");
    expect(input.getAttribute("placeholder")).toBe("MM");
    expect(input.getAttribute("value")).toBe("12");
  });

  it("Input 값이 변경되면 onChange 핸들러가 실행됩니다", () => {
    const { getByLabelText } = makeInput();

    fireEvent.change(getByLabelText("월 2자리"), {
      target: {
        value: "11",
      },
    });

    expect(handleChange).toHaveBeenCalled();
  });
});
