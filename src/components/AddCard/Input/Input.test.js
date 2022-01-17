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

  const makeInput = ({
    field = initialField,
    isFullField = false,
    separator,
  } = {}) =>
    render(
      <Input
        field={field}
        onChange={handleChange}
        isFullField={isFullField}
        separator={separator}
      />
    );

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

  context("입력된 Input 값이 최대 길이인 경우", () => {
    it("구분자를 렌더링합니다", () => {
      const { queryByText } = makeInput({ isFullField: true });

      expect(queryByText("-")).toBeInTheDocument();
    });
  });

  context("입력된 Input 값이 최대 길이가 아닌 경우", () => {
    it("구분자를 렌더링합니다", () => {
      const { queryByText } = makeInput({ isFullField: false });

      expect(queryByText("-")).not.toBeInTheDocument();
    });
  });

  context("구분자를 설정하지 않았을때", () => {
    it("기본 구분자인 '-'를 렌더링합니다", () => {
      const { queryByText } = makeInput({ isFullField: true });

      expect(queryByText("-")).toBeInTheDocument();
    });
  });

  context("구분자를 '/'으로 설정한 경우", () => {
    it("'/'를 렌더링합니다", () => {
      const { queryByText } = makeInput({ isFullField: true, separator: "/" });

      expect(queryByText("/")).toBeInTheDocument();
    });
  });
});
