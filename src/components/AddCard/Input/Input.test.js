import { fireEvent, render } from "@testing-library/react";

import Input from "./Input";

describe("Input", () => {
  const handleChange = jest.fn();

  const initialProperty = {
    id: "expiry-date",
    ariaLabel: "테스트 라벨",
    ref: null,
    type: "password",
    name: "testField",
    placeholder: "MM",
    value: "12",
    maxLength: 2,
  };

  const makeInput = ({ property = initialProperty } = {}) =>
    render(
      <Input
        {...property}
        ref={property.ref}
        onChange={handleChange}
      />
    );

  it("Input을 렌더링합니다", () => {
    const { queryByLabelText } = makeInput();
    const input = queryByLabelText("테스트 라벨");

    expect(input).toBeInTheDocument();
    expect(input.getAttribute("id")).toBe("expiry-date");
    expect(input.getAttribute("type")).toBe("password");
    expect(input.getAttribute("name")).toBe("testField");
    expect(input.getAttribute("placeholder")).toBe("MM");
    expect(input.getAttribute("value")).toBe("12");
  });

  it("Input 값이 변경되면 onChange 핸들러가 실행됩니다", () => {
    const { getByLabelText } = makeInput();

    fireEvent.change(getByLabelText("테스트 라벨"), {
      target: {
        value: "11",
      },
    });

    expect(handleChange).toHaveBeenCalled();
  });

  context(
    "입력한 글자의 길이가 'max-length' 보다 작거나 같은 경우",
    () => {
      it("값이 변경됩니다", () => {
        const { getByLabelText } = makeInput({
          ...initialProperty,
          maxLength: 2,
        });

        fireEvent.change(getByLabelText("테스트 라벨"), {
          target: {
            value: "11",
          },
        });

        expect(handleChange).toBeCalledWith({
          name: "testField",
          value: "11",
        });
      });
    }
  );

  context("입력한 글자의 길이가 'max-length' 보다 큰 경우", () => {
    it("값이 변경되지 않습니다", () => {
      const { getByLabelText } = makeInput({
        ...initialProperty,
        maxLength: 2,
      });

      fireEvent.change(getByLabelText("테스트 라벨"), {
        target: {
          value: "111",
        },
      });

      expect(handleChange).not.toBeCalled();
    });
  });
});
