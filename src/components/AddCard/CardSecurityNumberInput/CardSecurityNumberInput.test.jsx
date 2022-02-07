import { fireEvent, render } from "@testing-library/react";

import CardSecurityNumberInput from "./CardSecurityNumberInput";

describe("CardSecurityNumberInput", () => {
  const handleChange = jest.fn();

  const makeCardSecurityNumberInput = () =>
    render(
      <CardSecurityNumberInput value="" onChange={handleChange} />
    );

  it("보안코드 Input을 렌더링합니다", () => {
    const { queryByLabelText } = makeCardSecurityNumberInput();

    expect(queryByLabelText("보안코드(CVC/CVV)")).toBeInTheDocument();
  });

  context("보안코드 Input 값으로 숫자를 입력했을 경우", () => {
    it("change 이벤트 핸들러가 실행됩니다", () => {
      const { getByLabelText } = makeCardSecurityNumberInput();

      fireEvent.change(getByLabelText("보안코드(CVC/CVV)"), {
        target: {
          value: 11,
        },
      });

      expect(handleChange).toBeCalledWith({
        name: "securityNumber",
        value: "11",
      });
    });
  });

  context("보안코드 Input 값으로 숫자를 입력하지 않았을 경우", () => {
    it("change 이벤트 핸들러가 실행되지 않습니다", () => {
      const { getByLabelText } = makeCardSecurityNumberInput();

      fireEvent.change(getByLabelText("보안코드(CVC/CVV)"), {
        target: {
          value: "STRING",
        },
      });

      expect(handleChange).not.toBeCalled();
    });
  });
});
